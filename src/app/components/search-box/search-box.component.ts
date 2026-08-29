import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  query = '';

  private router = inject(Router);
  public languageService = inject(LanguageService);

  onSearch() {
    const q = this.query.trim();
    if (!q) return;
    const basePath = this.languageService.isEnglish() ? '/search' : '/hi/search';
    this.router.navigate([basePath], { queryParams: { q } });
    this.query = '';
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.onSearch();
  }
}
