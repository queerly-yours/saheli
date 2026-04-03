import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SearchIndexEntry {
  id: string;
  titleEn: string;
  titleHi: string;
  subtitle: string;
  publishedDate: string;
  contentEn: string;
  contentHi: string;
  categoryId?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  snippet: string;
  matchedIn: 'title' | 'subtitle' | 'content';
  categoryId?: string;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private index: SearchIndexEntry[] = [];
  private loaded = false;

  readonly isLoading = signal(false);

  constructor(private http: HttpClient) {
    this.loadIndex();
  }

  private loadIndex() {
    this.isLoading.set(true);
    this.http.get<SearchIndexEntry[]>('assets/search-index.json').subscribe({
      next: (data) => {
        this.index = data;
        this.loaded = true;
        this.isLoading.set(false);
      },
      error: () => {
        console.error('Search index not found. Run: node scripts/build-search-index.js');
        this.isLoading.set(false);
      }
    });
  }

  search(query: string, lang: 'en' | 'hi'): SearchResult[] {
    if (!query.trim() || !this.loaded) return [];

    const words = query.trim().split(/\s+/).filter(Boolean);

    return this.index
      .filter(entry => {
        const title = (lang === 'hi' && entry.titleHi) ? entry.titleHi : entry.titleEn;
        const subtitle = entry.subtitle ?? '';
        const content = (lang === 'hi' && entry.contentHi) ? entry.contentHi : entry.contentEn;

        return words.every(w => {
          const regex = this.buildRegex(w, lang);
          return regex.test(title) || regex.test(subtitle) || regex.test(content);
        });
      })
      .map(entry => {
        const title = (lang === 'hi' && entry.titleHi) ? entry.titleHi : entry.titleEn;
        const subtitle = entry.subtitle ?? '';
        const content = (lang === 'hi' && entry.contentHi) ? entry.contentHi : entry.contentEn;

        return {
          id: entry.id,
          title,
          subtitle,
          publishedDate: entry.publishedDate,
          matchedIn: this.getMatchedIn(entry, words, lang),
          snippet: this.getSnippet(content, words[0], lang),
          categoryId: entry.categoryId
        };
      });
  }

  private getMatchedIn(
    entry: SearchIndexEntry,
    words: string[],
    lang: 'en' | 'hi'
  ): 'title' | 'subtitle' | 'content' {
    const title = (lang === 'hi' && entry.titleHi) ? entry.titleHi : entry.titleEn;
    const subtitle = entry.subtitle ?? '';

    const allInTitle = words.every(w => this.buildRegex(w, lang).test(title));
    if (allInTitle) return 'title';

    const allInSubtitle = words.every(w => this.buildRegex(w, lang).test(subtitle));
    if (allInSubtitle) return 'subtitle';

    return 'content';
  }

  private getSnippet(content: string, keyword: string, lang: 'en' | 'hi', radius = 150): string {
    if (!content) return '';
    const regex = this.buildRegex(keyword, lang);
    const match = regex.exec(content);
    if (!match) return content.slice(0, radius) + '...';
    const idx = match.index;
    const start = Math.max(0, idx - radius);
    const end = Math.min(content.length, idx + keyword.length + radius);
    return (start > 0 ? '...' : '') + content.slice(start, end) + '...';
  }

  private buildRegex(word: string, lang: 'en' | 'hi'): RegExp {
    const escaped = this.escapeRegex(word);
    if (lang === 'hi') {
      // For Hindi, use whitespace/punctuation boundaries instead of \b
      // which doesn't work with Devanagari Unicode characters
      return new RegExp(`(?<![^\\s।,।!?])(${escaped})(?![^\\s।,।!?])`, 'iu');
    }
    return new RegExp(`\\b(${escaped})\\b`, 'i');
  }

  private escapeRegex(word: string): string {
    return word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}