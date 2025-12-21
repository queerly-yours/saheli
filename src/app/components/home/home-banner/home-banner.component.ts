import { Component, effect } from '@angular/core';
import { categories } from '../../../utils/category';
import { Router } from '@angular/router';
import { ParamType } from '../../../utils/utils';
import { LanguageService } from '../../../services/language/language.service';
import { ContentService } from '../../../services/content/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-banner',
  imports: [CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {

  menu = categories;
  language: string = '';

  constructor(private router: Router, public languageService: LanguageService, private contentService: ContentService) { 
     effect(() => {
      this.language = this.languageService.lang();
    });
  }


  navigateToCategory(title: string) {
    const itemId = this.menu.find(item => item.title.toUpperCase() === title.toUpperCase())?.id;

    this.languageService.isEnglish() ?
    this.router.navigate(['/details/', itemId, ParamType.Category]) :
    this.router.navigate(['hi/details/', itemId, ParamType.Category])
    ;
  }

}
