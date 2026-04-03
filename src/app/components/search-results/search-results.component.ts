import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchService, SearchResult } from '../../services/search/search.service';
import { LanguageService } from '../../services/language/language.service';
import { HighlightPipe } from '../../services/pipes/highlight/highlight.pipe';
import { ParamType } from '../../utils/utils';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightPipe],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  query = signal('');
  allResults = signal<SearchResult[]>([]);
  searched = signal(false);
  currentPage = signal(1);

  readonly pageSize = PAGE_SIZE;

  totalPages = computed(() => Math.ceil(this.allResults().length / PAGE_SIZE));

  paginatedResults = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.allResults().slice(start, start + PAGE_SIZE);
  });

  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: (number | '...')[] = [];

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);

    return pages;
  });

  searchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public languageService = inject(LanguageService);

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const q = params.get('q') ?? '';
      this.query.set(q);
      this.currentPage.set(1);
      this.runSearch(q);
    });
  }

  private runSearch(q: string) {
    if (!q.trim()) {
      this.allResults.set([]);
      this.searched.set(false);
      return;
    }
    setTimeout(() => {
      this.allResults.set(this.searchService.search(q, this.languageService.lang()));
      this.searched.set(true);
    }, 300);
  }

  goToPage(page: number | '...') {
    if (page === '...' || page === this.currentPage()) return;
    this.currentPage.set(page as number);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToArticle(result: SearchResult) {
    const base = this.languageService.isEnglish() ? '' : '/hi';
    this.router.navigate([`${base}/details/${result.id}/${ParamType.Article}`]);
  }

  goHome() {
    this.router.navigate([this.languageService.isEnglish() ? '/' : '/hi']);
  }
}