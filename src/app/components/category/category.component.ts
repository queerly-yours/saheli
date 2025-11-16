import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';
import { AccordionComponent } from "../shared/accordion/accordion.component";
import { ArticleSummaryComponent } from "../shared/article-summary/article-summary.component";
import { HeaderLinesComponent } from "../shared/header-lines/header-lines.component";
import { subcategoriesSummary } from '../../utils/all-subcategory-summary';

@Component({
  selector: 'app-category',
  imports: [AccordionComponent, ArticleSummaryComponent, HeaderLinesComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categoryData!: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const type = params.get('type');
      this.fetchDetailsBasedOnParamType(id, type);
    });
  }

  fetchDetailsBasedOnParamType(id: string | null, type: string | null) {
    if (!id || !type) {
      return;
    }

    switch (type) {
      case ParamType.Category:
        this.fetchCategoryData(id);
        break;

      case ParamType.SubCategory:
        this.fetchSubCategoryData(id);
        break;

      default:
        break;
    }

  }
  
  fetchCategoryData(id: string) {
    this.categoryData = filterByIds(categories, [id], 'id')[0];
    console.log(this.categoryData);
  }

  fetchSubCategoryData(id: string) {
    this.categoryData = filterByIds(subcategoriesSummary, [id], 'id')[0];
  }
}
