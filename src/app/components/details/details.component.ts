import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';
import { AccordionComponent } from "../shared/accordion/accordion.component";
import { ArticleSummaryComponent } from "../shared/article-summary/article-summary.component";
import { HeaderLinesComponent } from "../shared/header-lines/header-lines.component";
import { subcategoriesSummary } from '../../utils/all-subcategory-summary';
import { articles } from '../../utils/all-articles';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  imports: [AccordionComponent, ArticleSummaryComponent, HeaderLinesComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  categoryData!: any;
  type!: string;
  paramTypes = ParamType;


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.type = params.get('type') ?? '';
      this.fetchDetailsBasedOnParamType(id, this.type);
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

      case ParamType.Article:
        this.fetchArticleData(id);
        break;

      default:
        break;
    }

  }
  
  fetchCategoryData(id: string) {
    this.categoryData = filterByIds(categories, [id], 'id')[0];
  }

  fetchSubCategoryData(id: string) {
    this.categoryData = filterByIds(subcategoriesSummary, [id], 'id')[0];
  }

  fetchArticleData(id: string) {
    this.categoryData = filterByIds(articles, [id], 'id')[0];
    console.log(this.categoryData);
  }

  getSanitizedValue(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
