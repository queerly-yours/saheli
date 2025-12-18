import { Injectable } from '@angular/core';
import type { FuseResult } from 'fuse.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { article } from '../../utils/data-model';

export interface SearchItem {
  id: string;
  type: 'article';
  title?: string;
  subtitle?: string;
  value?: string;
  valueText?: string; // stripped plain text
  decades?: string[];
  payload: article;
  categoryIdList: string[];
  subCategoryIdList: string[];
}

@Injectable({ providedIn: 'root' })
export class SearchService {

  private items: SearchItem[] = [];
  private results$ = new BehaviorSubject<FuseResult<SearchItem>[]>([]);

  searchResults$(): Observable<FuseResult<SearchItem>[]> {
    return this.results$.asObservable();
  }

  // Load articles
  setArticles(articles: article[]) {
    this.items = (articles || []).map(a => ({
      id: a.id,
      type: 'article',
      title: a.title ?? '',
      subtitle: a.subtitle ?? '',
      value: a.value ?? '',
      decades: a.decades ?? [],
      valueText: this.stripHtml(a.value), // plain text
      payload: a,
      categoryIdList: a.categoryIdList,
      subCategoryIdList: a.subCategoryIdList
      
    }));
    this.results$.next([]);
  }

  private stripHtml(html: string | undefined): string {
    if (!html) return '';
    html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('*').forEach(el => {
      el.removeAttribute('style');
      el.removeAttribute('class');
    });
    return div.textContent || '';
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // search(query: string, limit = 100) {
  //   if (!this.items.length || !query?.trim()) {
  //     this.results$.next([]);
  //     return;
  //   }

  //   const allWords = query.split(/\s+/).filter(w => w);
  //   const hasLongWords = allWords.some(w => w.length > 3);

  //   // Build search terms: combine consecutive small words into one
  //   const searchTerms: string[] = [];
  //   let temp: string[] = [];

  //   for (const word of allWords) {
  //     if (word.length > 3 || !hasLongWords) {
  //       // Push any accumulated small words as a single term
  //       if (temp.length) {
  //         searchTerms.push(temp.join(' '));
  //         temp = [];
  //       }
  //       searchTerms.push(word);
  //     } else {
  //       temp.push(word);
  //     }
  //   }
  //   if (temp.length) searchTerms.push(temp.join(' '));

  //   const results: { item: SearchItem; matches: { key: keyof SearchItem; indices: [number, number][]; value: string }[]; score: number }[] = [];

  //   for (const item of this.items) {
  //     const matches: { key: keyof SearchItem; indices: [number, number][]; value: string }[] = [];
  //     let matchedWords = 0;

  //     for (const term of searchTerms) {
  //       if (!term) continue;

  //       const re = new RegExp(term, 'gi'); // global + case-insensitive

  //       (['title', 'subtitle', 'valueText'] as (keyof SearchItem)[]).forEach((key) => {
  //         const text = item[key];
  //         if (typeof text !== 'string' || !text) return;

  //         const indices: [number, number][] = [];
  //         let match: RegExpExecArray | null;

  //         while ((match = re.exec(text)) !== null) {
  //           indices.push([match.index, match.index + match[0].length - 1]);
  //         }

  //         if (indices.length > 0) {
  //           matchedWords += indices.length;
  //           matches.push({ key, indices, value: text });
  //         }
  //       });
  //     }

  //     if (matches.length > 0) {
  //       results.push({ item, matches, score: matchedWords });
  //     }
  //   }

  //   // Sort by highest matched words first
  //   results.sort((a, b) => b.score - a.score);

  //   const fuseResults: any[] = results.slice(0, limit).map(r => ({
  //     item: r.item,
  //     refIndex: 0,
  //     score: 0,
  //     matches: r.matches
  //   }));

  //   this.results$.next(fuseResults);
  // }


  search(query: string, limit = 100) {
    // If query is empty or only spaces, return all articles
    if (!query?.trim()) {
      const fuseResults = this.items.slice(0, limit).map(item => ({
        item,
        refIndex: 0,
        score: 0,
        matches: []
      }));
      this.results$.next(fuseResults);
      return;
    }

    const allWords = query.split(/\s+/).filter(w => w);
    const hasLongWords = allWords.some(w => w.length > 3);

    // Combine consecutive small words into single substring search
    const searchTerms: string[] = [];
    let temp: string[] = [];

    for (const word of allWords) {
      if (word.length > 3 || !hasLongWords) {
        if (temp.length) {
          searchTerms.push(temp.join(' '));
          temp = [];
        }
        searchTerms.push(word);
      } else {
        temp.push(word);
      }
    }
    if (temp.length) searchTerms.push(temp.join(' '));

    const results: { item: SearchItem; matches: { key: keyof SearchItem; indices: [number, number][]; value: string }[]; score: number }[] = [];

    for (const item of this.items) {
      const matches: { key: keyof SearchItem; indices: [number, number][]; value: string }[] = [];
      let matchedWords = 0;

      for (const term of searchTerms) {
        if (!term) continue;

        const re = new RegExp(term, 'gi');

        (['title', 'subtitle', 'valueText'] as (keyof SearchItem)[]).forEach((key) => {
          const text = item[key];
          if (typeof text !== 'string' || !text) return;

          const indices: [number, number][] = [];
          let match: RegExpExecArray | null;

          while ((match = re.exec(text)) !== null) {
            indices.push([match.index, match.index + match[0].length - 1]);
          }

          if (indices.length > 0) {
            matchedWords += indices.length;
            matches.push({ key, indices, value: text });
          }
        });
      }

      if (matches.length > 0) {
        results.push({ item, matches, score: matchedWords });
      }
    }

    // Sort by highest matched words first
    results.sort((a, b) => b.score - a.score);

    const fuseResults: any[] = results.slice(0, limit).map(r => ({
      item: r.item,
      refIndex: 0,
      score: 0,
      matches: r.matches
    }));

    this.results$.next(fuseResults);
  }



  generateSnippet(r: FuseResult<SearchItem>, beforeChars = 40, afterChars = 100): string | null {
    if (!r.matches || r.matches.length === 0) return null;

    // Prefer matches in valueText, otherwise title/subtitle
    const valueMatch = r.matches.find(m => m.key === 'valueText') || r.matches[0];
    const text = valueMatch.value;
    if (!text) return null;

    // Find snippet start/end around the first match
    const firstIndices = valueMatch.indices[0];

    // Start: move back beforeChars, then adjust to nearest word boundary
    let snippetStart = Math.max(0, firstIndices[0] - beforeChars);
    if (snippetStart > 0) {
      const spaceIdx = text.lastIndexOf(' ', firstIndices[0]);
      if (spaceIdx > snippetStart) snippetStart = spaceIdx + 1;
    }

    // End index
    let snippetEnd = Math.min(text.length, firstIndices[1] + afterChars);

    let snippet = text.substring(snippetStart, snippetEnd);

    // Adjust relative indices
    const offset = snippetStart;

    // Highlight all matches in this snippet
    const highlights: [number, number][] = [];
    r.matches.forEach(m => {
      if (m.key !== valueMatch.key) return; // Only highlight in the same text
      m.indices.forEach(([s, e]) => {
        if (e < snippetStart || s > snippetEnd) return;
        highlights.push([Math.max(0, s - offset), Math.min(snippet.length, e - offset)]);
      });
    });

    highlights.sort((a, b) => a[0] - b[0]);

    // Build highlighted snippet
    let result = '';
    let lastIndex = 0;

    for (const [s, e] of highlights) {
      if (s > lastIndex) {
        result += this.escapeHtml(snippet.substring(lastIndex, s));
      }
      result += `<mark>${this.escapeHtml(snippet.substring(s, e + 1))}</mark>`;
      lastIndex = e + 1;
    }

    if (lastIndex < snippet.length) {
      result += this.escapeHtml(snippet.substring(lastIndex));
    }

    // Add ellipsis at the start if truncated
    const prefix = snippetStart > 0 ? '…' : '';

    return prefix + result + '...';
  }



  getArticleById(id: string): article | undefined {
    return this.items.find(i => i.id === id)?.payload;
  }

  clearResults() {
    this.results$.next([]);
  }
}
