// src/app/components/search/search.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SearchService } from '../../../services/search/search.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-search-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIcon],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchDropdownComponent implements OnDestroy {
  q = new FormControl('');
  results: any[] = [];
  sub = new Subscription();

  constructor(private searchSvc: SearchService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const isSearchPage = event.urlAfterRedirects.startsWith('/search');

      if (!isSearchPage) {
        this.q.setValue('');
      } else {
        this.route.queryParams.subscribe(params => {
          this.q.setValue(params['query'] || '')
        });
      }
    }
  });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  onClick(r: any) {
    console.log('Search click:', r.item.payload);
  }

  onSearch() {
    const query = this.q.value || '';
    console.log("Search clicked:", query);

    // this.searchSvc.search(query || '', 50);

     this.router.navigate(['/search'], {
      queryParams: { query }
    });
  }

  clearSearch() {
  this.q.setValue('');
}
}
