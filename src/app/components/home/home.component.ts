import { Component } from '@angular/core';
import { ArticleSliderComponent } from "./article-slider/article-slider.component";
import { Router } from '@angular/router';
import { filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';
import { HomeBannerComponent } from "./home-banner/home-banner.component";

@Component({
  selector: 'app-home',
  imports: [ArticleSliderComponent, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

}
