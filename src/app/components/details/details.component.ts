import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';
import { AccordionComponent } from "../shared/accordion/accordion.component";
import { ArticleSummaryComponent } from "../shared/article-summary/article-summary.component";
import { HeaderLinesComponent } from "../shared/header-lines/header-lines.component";
import { subcategoriesSummary } from '../../utils/all-subcategory-summary';
import { articles } from '../../utils/all-articles';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryPopComponent } from "../shared/category-pop/category-pop.component";
import { NgClass, UpperCasePipe } from '@angular/common';
import { article, category, subCategory } from '../../utils/data-model';
import { DateUtilsService } from '../../services/date-utils/date-utils.service';
import { CapitalizePipe } from "../../services/pipes/capitalize/capitalize.pipe";

@Component({
  selector: 'app-category',
  imports: [AccordionComponent, ArticleSummaryComponent, HeaderLinesComponent, CategoryPopComponent, NgClass, CapitalizePipe, UpperCasePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  categoryData!: any;
  type!: string;
  paramTypes = ParamType;
  viewByDecade = false;
  selectedDecade: string | null = null;
  selectedId: string | null = null;
  decadeWiseArticleList: any[] = [];


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, private dateUtils: DateUtilsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
      this.type = params.get('type') ?? '';
      this.fetchDetailsBasedOnParamType(this.selectedId, this.type);

    });

    this.route.queryParams.subscribe(params => {
      this.selectedDecade = params['decade'] || null;
      this.decadalViewOperations();
    });
  }

  decadalViewOperations() {
    if (this.selectedDecade) {
        this.applyDecadeFilter();
      } else {
        this.viewByDecade = false;
      }
  }

  fetchDetailsBasedOnParamType(id: string | null, type: string | null) {
    if (!id || !type) {
      return;
    }

    switch (type) {
      case ParamType.Category:
        this.fetchCategoryData(id, categories);
        break;

      case ParamType.SubCategory:
        this.fetchCategoryData(id, subcategoriesSummary);
        break;

      case ParamType.Article:
        this.fetchCategoryData(id, articles);
        break;

      default:
        break;
    }

  }

  fetchCategoryData(id: string, instance: any[]) {
    this.categoryData = filterByIds(instance, [id], 'id')[0];

    if (this.categoryData.articleList?.length) {
      this.categoryData.articleList = this.dateUtils.sortByPublishedDate(this.categoryData.articleList);
    }
    
    if (this.categoryData.subCategoryList?.length) {
      this.sortArticlesByDecade(this.categoryData.subCategoryList);
    }

    this.decadalViewOperations();
    
  }

  sortArticlesByDecade(articleList: article[]) {
      articleList.forEach((subCategory: any) => {
        if (subCategory.articleList?.length) {
          subCategory.articleList = this.dateUtils.sortByPublishedDate(subCategory.articleList);
        }
        
        if (subCategory.innerCategories?.length) {
          this.sortArticlesByDecade(subCategory.innerCategories);
        }
      })
  }

  getSanitizedValue(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  onDecadeClick(decade: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { decade },
      queryParamsHandling: 'merge' // keep others
    });
  }

  applyDecadeFilter() {
    this.decadeWiseArticleList = [];
    this.viewByDecade = true;
    if (this.categoryData.articleList?.length) {
      const categoryDecadeArticles = this.categoryData.articleList.filter((article: any) => article.decade === this.selectedDecade);
      this.decadeWiseArticleList.push(...categoryDecadeArticles);
    }

    if (this.categoryData.subCategoryList?.length) {
      this.categoryData.subCategoryList.forEach((subCategory: any) => {
        if (subCategory.articleList?.length) {
          const subCategoryDecadeArticles = subCategory.articleList.filter((article: any) => article.decade === this.selectedDecade);
          this.decadeWiseArticleList.push(...subCategoryDecadeArticles);

          if (subCategory.innerCategories?.length) {
            subCategory.innerCategories.forEach((innerCategory: any) => {
              if (innerCategory.articleList?.length) {
                const innerCategoryDecadeArticles = innerCategory.articleList.filter((article: any) => article.decade === this.selectedDecade);
                this.decadeWiseArticleList.push(...innerCategoryDecadeArticles);
              }
            })
          }
        }
      })
    }

    this.decadeWiseArticleList = this.dateUtils.sortByPublishedDate(this.decadeWiseArticleList);

    this.decadeWiseArticleList = Object.values(
      this.decadeWiseArticleList.reduce((acc: Record<string, any>, item) => {
        acc[item.id] = item;
        return acc;
      }, {})
    );
  }

  navigateToArticle(id: string | undefined, isDecadeView = false) {
    this.router.navigate(['/details', id, ParamType.Article]);
  }
  
}
