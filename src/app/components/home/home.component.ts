import { Component, effect } from '@angular/core';
import { ArticleSliderComponent } from "./article-slider/article-slider.component";
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { LanguageService } from '../../services/language/language.service';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../services/pipes/safeHTML/safe-html.pipe';

@Component({
  selector: 'app-home',
  imports: [ArticleSliderComponent, HomeBannerComponent, CommonModule, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  content: string[] = [];


  constructor(public languageService: LanguageService, private contentService: ContentService) { 
     effect(() => {
      this.loadContent(this.languageService.lang());
    });
  }

  ngOnInit(): void { }

  loadContent(language: string) {
    this.contentService.getContent(language).subscribe(data => {
      this.content = data['homeDesc'].home;
    });
  }
}
