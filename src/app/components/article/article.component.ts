import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component, effect, Input, OnChanges, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ContentService } from '../../services/content/content.service';
import { contentElement, r2FetchArticleImgURL } from '../../utils/constants';
import { PopoverDirective } from '../../services/directives/popover/popover.directive';
import { LightboxComponent } from '../shared/lightbox/lightbox.component';

@Component({
  selector: 'app-article',
  imports: [NgClass, PopoverDirective, LightboxComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnChanges {

  @Input() articleId!: string;
  currentLang = 'en';
  articleContent: any;
  elements = contentElement;
  imageURL = r2FetchArticleImgURL;

  modalOpen: boolean = false;
  modalData!: any;


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

  openLightbox(item: any) {
    const lightboxContent = item[this.currentLang];

    this.modalData = lightboxContent;

    this.modalOpen = true;
  }

  closeLightbox() {
    this.modalOpen = false;
  }
}
