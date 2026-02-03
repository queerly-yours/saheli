import { NgClass } from '@angular/common';
import { Component, effect, Input, OnChanges, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ContentService } from '../../services/content/content.service';
import { contentElement } from '../../utils/constants';

@Component({
  selector: 'app-article',
  imports: [NgClass],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnChanges {

  @Input() articleId!: string;
  currentLang = 'en';
  articleContent: any;
  elements = contentElement;


  constructor(private languageService: LanguageService, private contentService: ContentService) {
    effect(() => {
      console.log('Language changed to:', this.languageService.lang());
      this.currentLang = this.languageService.lang();
    });
  }

  ngOnChanges(): void {
    this.contentService.getArticleContent(this.articleId).subscribe({
      next: (data) => {
        this.articleContent = data.sections;
      },
      error: (err) => {
        this.articleContent = null;
      }
    })
  }
}
