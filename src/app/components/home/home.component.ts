import { Component } from '@angular/core';
import { ArticleSliderComponent } from "./article-slider/article-slider.component";
import { Router } from '@angular/router';
import { filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';

@Component({
  selector: 'app-home',
  imports: [ArticleSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  testButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

  navigateToCategory(id: string) {
    const test = filterByIds(categories, [id], 'id');
    console.log(test);
    if (id !== '1' && id !== '13')
    this.router.navigate(['/details/', id, ParamType.Category]);
  }
}
