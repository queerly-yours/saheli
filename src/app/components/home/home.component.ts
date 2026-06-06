import { Component, DestroyRef, effect, inject } from '@angular/core';
import { ArticleSliderComponent } from "./article-slider/article-slider.component";
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { LanguageService } from '../../services/language/language.service';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../services/pipes/safeHTML/safe-html.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [ArticleSliderComponent, HomeBannerComponent, CommonModule, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  content: string[] = [];
  private destroyRef = inject(DestroyRef);


  constructor(public languageService: LanguageService, private contentService: ContentService) { 
     effect(() => {
      this.loadContent(this.languageService.lang());
    });
  }

  ngOnInit(): void { }

  loadContent(language: string) {
    this.contentService.getContent(language).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(data => {
      this.content = data['homeDesc'].home;
    });
  }
}
