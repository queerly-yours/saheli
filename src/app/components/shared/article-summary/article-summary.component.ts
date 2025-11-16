import { Component, Input } from '@angular/core';
import { articleList } from '../../../utils/data-model';

@Component({
  selector: 'app-article-summary',
  imports: [],
  templateUrl: './article-summary.component.html',
  styleUrl: './article-summary.component.scss'
})
export class ArticleSummaryComponent {

  @Input() articleSummary: articleList | null = null;

  navigateToArticle(id: string | undefined) {
    console.log(id);
  }
}
