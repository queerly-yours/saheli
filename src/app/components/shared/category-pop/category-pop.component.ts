import { Component } from '@angular/core';
import { categories } from '../../../utils/category';
import { Router } from '@angular/router';
import { ParamType } from '../../../utils/utils';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-category-pop',
  imports: [],
  templateUrl: './category-pop.component.html',
  styleUrl: './category-pop.component.scss'
})
export class CategoryPopComponent {

  panelOpen = false;
  closeTimer: any;
  menu = categories;

  constructor(private router: Router, public languageService: LanguageService) { }

  navigateToCategory(title: string) {
    const itemId = this.menu.find(item => item.title.toUpperCase() === title.toUpperCase())?.id;

    this.languageService.isEnglish() ?
    this.router.navigate(['/details/', itemId, ParamType.Category]) :
    this.router.navigate(['hi/details/', itemId, ParamType.Category])
    ;
  }

  openPanel() {
    this.panelOpen = true;
    this.cancelCloseTimer();
  }

  startCloseTimer() {
    this.cancelCloseTimer();
    this.closeTimer = setTimeout(() => {
      this.panelOpen = false;
    }, 200); // 1s delay
  }

  cancelCloseTimer() {
    if (this.closeTimer) clearTimeout(this.closeTimer);
  }

}
