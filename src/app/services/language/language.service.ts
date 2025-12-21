import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Lang } from '../../utils/constants';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _lang = signal<Lang>('en');
  readonly lang = this._lang.asReadonly();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.syncFromUrl());
  }

  private syncFromUrl() {
    const isHindi = this.router.url.startsWith('/hi');
    this._lang.set(isHindi ? 'hi' : 'en');
  }

  toggle() {
    const currentUrl = this.router.url;
    const isHindi = currentUrl.startsWith('/hi');

    let newUrl: string;

    if (isHindi) {
      // Remove only the first /hi
      newUrl = currentUrl.replace(/^\/hi(\/|$)/, '/');
    } else {
      newUrl = currentUrl === '/' ? '/hi' : `/hi${currentUrl}`;
    }

    this._lang.set(isHindi ? 'en' : 'hi');
    this.router.navigateByUrl(newUrl);
  }

  isEnglish(): boolean {
    return this.lang() === 'en';
  }
}
