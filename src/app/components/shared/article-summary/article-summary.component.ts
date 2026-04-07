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
      console.log('Language changed to:', this.languageService.lang());
      this.currentLang = this.languageService.lang();
    });
   }

  navigateToArticle(id: string | undefined) {
    this.navigateToArticleEvent.emit(id);
  }
}
