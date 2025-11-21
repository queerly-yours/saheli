import { Component, Input } from '@angular/core';
import { articleList } from '../../../utils/data-model';
import { Router } from '@angular/router';
import { ParamType } from '../../../utils/utils';

@Component({
  selector: 'app-article-summary',
  imports: [],
  templateUrl: './article-summary.component.html',
  styleUrl: './article-summary.component.scss'
})
export class ArticleSummaryComponent {

  @Input() articleSummary: articleList | null = null;

  constructor(private router: Router) { }


  navigateToArticle(id: string | undefined) {
    this.router.navigate(['/details', id, ParamType.Article]);
  }
}
