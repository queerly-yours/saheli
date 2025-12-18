import { Component, EventEmitter, Input, Output } from '@angular/core';
import { articleList } from '../../../utils/data-model';
import { CapitalizePipe } from '../../../services/pipes/capitalize/capitalize.pipe';

@Component({
  selector: 'app-article-summary',
  imports: [CapitalizePipe],
  templateUrl: './article-summary.component.html',
  styleUrl: './article-summary.component.scss'
})
export class ArticleSummaryComponent {
  @Input() articleSummary: articleList | null = null;
  @Output() navigateToArticleEvent = new EventEmitter();

  constructor() { }

  navigateToArticle(id: string | undefined) {
    this.navigateToArticleEvent.emit(id);
  }
}
