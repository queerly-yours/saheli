import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language/language.service';
import { ParamType } from '../../utils/utils';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  constructor(private router: Router, private languageService: LanguageService) {}

  toArticle(id: string | undefined, fromId?: string | null) {
    if (this.languageService.isEnglish()) {
      this.router.navigate(
        ['/details', id, ParamType.Article],
        fromId ? { queryParams: { from: fromId }, queryParamsHandling: 'merge' } : {}
      );
    } else {
      this.router.navigate(
        ['/hi/details', id, ParamType.Article],
        fromId ? { queryParams: { from: fromId }, queryParamsHandling: 'merge' } : {}
      );
    }
  }

  toLangAwareArticle(id: string) {
    const base = this.languageService.isEnglish() ? '' : '/hi';
    this.router.navigate([`${base}/details/${id}/${ParamType.Article}`]);
  }

  toLangAwareCategory(id: string) {
    if (this.languageService.isEnglish()) {
      this.router.navigate(['/details/', id, ParamType.Category]);
    } else {
      this.router.navigate(['hi/details/', id, ParamType.Category]);
    }
  }

  toLangAwareSubCategory(id: string) {
    if (this.languageService.isEnglish()) {
      this.router.navigate(['/details/', id, ParamType.SubCategory]);
    } else {
      this.router.navigate(['hi/details/', id, ParamType.SubCategory]);
    }
  }

  toPublication(id: string) {
    if (this.languageService.isEnglish()) {
      this.router.navigate(['/publications', id]);
    } else {
      this.router.navigate(['/hi/publications', id]);
    }
  }
}
