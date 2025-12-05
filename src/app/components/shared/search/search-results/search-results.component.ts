import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SearchService, SearchItem } from '../../../../services/search/search.service';
import { FuseResult } from 'fuse.js';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { heroArrowLeftCircle, heroArrowRightCircle } from '@ng-icons/heroicons/outline';
import { ParamType } from '../../../../utils/utils';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [provideIcons({ heroArrowLeftCircle, heroArrowRightCircle })],
})
export class SearchResultsComponent implements OnInit {

  query = '';
  results: FuseResult<SearchItem>[] = [];
  pagedResults: FuseResult<SearchItem>[] = [];
  page = 1;
  pageSize = 10;
  totalPages = 1;
  loading = true;
  pageChanging = false;;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      this.loading = true;

      // if (this.query) {
      this.page = 1;
      this.searchService.search(this.query, 1000);
      // }
    });

    this.searchService.searchResults$().subscribe(res => {
      this.results = res;
      this.totalPages = Math.max(1, Math.ceil(res.length / this.pageSize));
      this.setPage(1);
      this.loading = false;
    });
  }

  setPage(p: number) {
    if (p < 1) p = 1;
    if (p > this.totalPages) p = this.totalPages;

    this.pageChanging = true;

    setTimeout(() => {
      this.page = p;
      const start = (p - 1) * this.pageSize;
      this.pagedResults = this.results.slice(start, start + this.pageSize);
      this.pageChanging = false;
    }, 200);
  }

  onClick(r: FuseResult<SearchItem>) {
    console.log('Clicked result:', r.item.payload);
    this.router.navigate(['/details', r.item.payload.id, ParamType.Article]);
  }


  /** Highlight matches in title or subtitle */
  getHighlighted(result: FuseResult<SearchItem>, key: 'title' | 'subtitle'): SafeHtml {
    const matches = result.matches?.filter(m => m.key === key);
    if (!matches || matches.length === 0) return this.sanitizer.bypassSecurityTrustHtml(result.item[key] || '');

    const text = result.item[key] || '';
    let highlights: [number, number][] = [];

    // Collect all indices from matches
    matches.forEach(m => {
      m.indices.forEach(([start, end]: [number, number]) => {
        highlights.push([start, end]);
      });
    });

    if (highlights.length === 0) return this.sanitizer.bypassSecurityTrustHtml(text);

    // Merge overlapping / adjacent indices
    highlights.sort((a, b) => a[0] - b[0]);
    const merged: [number, number][] = [];
    let [currStart, currEnd] = highlights[0];

    for (let i = 1; i < highlights.length; i++) {
      const [start, end] = highlights[i];
      if (start <= currEnd + 1) {
        currEnd = Math.max(currEnd, end); // merge
      } else {
        merged.push([currStart, currEnd]);
        [currStart, currEnd] = [start, end];
      }
    }
    merged.push([currStart, currEnd]);

    // Build highlighted string
    let resultHtml = '';
    let lastIndex = 0;
    for (const [start, end] of merged) {
      resultHtml += this.escapeHtml(text.slice(lastIndex, start));
      resultHtml += `<mark>${this.escapeHtml(text.slice(start, end + 1))}</mark>`;
      lastIndex = end + 1;
    }
    resultHtml += this.escapeHtml(text.slice(lastIndex));

    return this.sanitizer.bypassSecurityTrustHtml(resultHtml);
  }

  /** Generate snippet for valueText with all matches highlighted */
  getSnippet(result: FuseResult<SearchItem>): SafeHtml | null {
    const snippet = this.searchService.generateSnippet(result, 40, 100);
    return snippet ? this.sanitizer.bypassSecurityTrustHtml(snippet) : null;
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}
