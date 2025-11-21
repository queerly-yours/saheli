import { Component, OnInit } from '@angular/core';
import { categories } from '../../../utils/category';
import { Router } from '@angular/router';
import { filterByIds, ParamType } from '../../../utils/utils';

@Component({
  selector: 'app-home-banner',
  imports: [],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {

  menu = categories;

  constructor(private router: Router) { }

  navigateToCategory(title: string) {
    const itemId = this.menu.find(item => item.title.toUpperCase() === title.toUpperCase())?.id;

    this.router.navigate(['/details/', itemId, ParamType.Category]);
  }

}
