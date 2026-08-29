import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { articleList } from '../../../utils/data-model';
import { CapitalizePipe } from '../../../services/pipes/capitalize/capitalize.pipe';
import { LanguageService } from '../../../services/language/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-summary',
  imports: [CapitalizePipe, CommonModule],
  templateUrl: './article-summary.component.html',
  styleUrl: './article-summary.component.scss'
})
export class ArticleSummaryComponent {
  @Input() articleSummary: articleList | null = null;
  @Output() navigateToArticleEvent = new EventEmitter();
  currentLang = 'en';

  constructor(private languageService: LanguageService) {
    effect(() => {
      this.currentLang = this.languageService.lang();
    });
  }

  get currentSubtitle() {
    const subtitle = this.articleSummary?.subtitle;
    const value = subtitle ? (subtitle[this.currentLang as keyof typeof subtitle] ?? '') : '';
    return typeof value === 'string' ? value.trim() : '';
  }

  navigateToArticle(id: string | undefined) {
    this.navigateToArticleEvent.emit(id);
  }
}
