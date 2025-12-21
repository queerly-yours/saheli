import { afterNextRender, Component, effect, Injector, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filterByArrayKeyAndIds, filterByIds, ParamType } from '../../utils/utils';
import { categories } from '../../utils/category';
import { AccordionComponent } from "../shared/accordion/accordion.component";
import { ArticleSummaryComponent } from "../shared/article-summary/article-summary.component";
import { HeaderLinesComponent } from "../shared/header-lines/header-lines.component";
import { subcategoriesSummary } from '../../utils/all-subcategory-summary';
import { articles } from '../../utils/all-articles';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryPopComponent } from "../shared/category-pop/category-pop.component";
import { NgClass, UpperCasePipe } from '@angular/common';
import { article } from '../../utils/data-model';
import { DateUtilsService } from '../../services/date-utils/date-utils.service';
import { CapitalizePipe } from "../../services/pipes/capitalize/capitalize.pipe";
import { initialVisibilityCount } from '../../utils/constants';
import { LanguageService } from '../../services/language/language.service';
import { articlesSummary } from '../../utils/all-articles-summary';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-category',
  imports: [AccordionComponent, ArticleSummaryComponent, HeaderLinesComponent, CategoryPopComponent, NgClass, CapitalizePipe, UpperCasePipe, NgIcon],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [provideIcons({ heroChevronLeft, heroChevronRight })]
})
export class DetailsComponent {

  categoryData!: any;
  articleData!: any;
  type!: string;
  paramTypes = ParamType;
  viewByDecade = false;
  selectedDecade: string | null = null;
  selectedId: string | null = null;
  fromId: string | null = null;
  decadeWiseArticleList: any[] = [];
  initialVisibilityCount = initialVisibilityCount;
  visibleCount = 10;
  incrementBy = 10;
  articleNavList: any[] = [];



  constructor(private route: ActivatedRoute, 
    private sanitizer: DomSanitizer, 
    private injector: Injector, 
    private router: Router, 
    private dateUtils: DateUtilsService,
    private languageService: LanguageService) {
    effect(() => {
      console.log('Language changed to:', this.languageService.lang());
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
      this.type = params.get('type') ?? '';
      this.fetchDetailsBasedOnParamType(this.selectedId, this.type);

    });

    this.route.queryParams.subscribe(params => {
      this.selectedDecade = params['decade'] || null;
      this.fromId = params['from'] || null;
      if (this.fromId) {
        this.getNextAndPreviousArticles();
      }
      this.decadalViewOperations();
    });
  }

  decadalViewOperations() {
    if (this.selectedDecade && !this.fromId) {
        this.visibleCount = this.initialVisibilityCount;
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
      this.sortArticlesByDate(this.categoryData.subCategoryList);
    }

    this.decadalViewOperations();
    
  }

  getNextAndPreviousArticles() {
    if (!this.fromId) {
      return;
    } else {
      if (this.selectedDecade) {
        this.getArticlNavContentForDecade(this.fromId);
      } else this.getArticlNavContent(this.fromId);
    }
  }

  getArticlNavContent(fromId: string) {
    const instanceKey = fromId.toLowerCase().startsWith('subcategory') || fromId.toLowerCase().startsWith('innercategory') ?
        'subCategoryIdList' : 'categoryIdList';
      let articleNavList = this.dateUtils.sortByPublishedDate(filterByArrayKeyAndIds(articlesSummary, [fromId], instanceKey));
      this.articleNavList = articleNavList.map((article: any) => article.id);
  }
  
  getArticlNavContentForDecade(fromId: string) {
    const categoryContent = filterByIds(categories, [fromId], 'id')[0] as any;
    let articleList = [];
    if (categoryContent.articleList?.length) {
      categoryContent.articleList = this.dateUtils.sortByPublishedDate(categoryContent.articleList);
    }

    if (categoryContent.subCategoryList?.length) {
      this.sortArticlesByDate(categoryContent.subCategoryList);
    }

    if (categoryContent.articleList?.length) {
      articleList.push(...categoryContent.articleList.filter((item: any) => item.decade === this.selectedDecade));
    }
    if (categoryContent.subCategoryList?.length) {
      categoryContent.subCategoryList.forEach((subCategory: any) => {
        if (subCategory.articleList?.length) {
          articleList.push(...subCategory.articleList.filter((item: any) => item.decade === this.selectedDecade));
        }
        if (subCategory.innerCategories?.length) {
          subCategory.innerCategories.forEach((innerCategory: any) => {
            if (innerCategory.articleList?.length) {
              articleList.push(...innerCategory.articleList.filter((item: any) => item.decade === this.selectedDecade));
            }
          })
        }
      })
    }

    articleList = this.dateUtils.sortByPublishedDate(articleList);

    this.articleNavList = [...new Set(articleList.map((article: any) => article.id))];
  }

  disableArticleNav(type: 'PREV' | 'NEXT') {
    if (type === 'PREV') {
      return this.articleNavList[0] === this.selectedId;
    } else {
       return this.articleNavList[this.articleNavList.length - 1] === this.selectedId;
    }
  }

  getNavArticle(type: 'PREV' | 'NEXT') {
    const index = this.articleNavList.indexOf(this.selectedId);
    let navId = '';
    if (type === 'PREV') {
      navId = this.articleNavList[index - 1];
    } else {
      navId = this.articleNavList[index + 1];
    }
    if (this.fromId) {
      this.navigateToArticle(navId, false, this.fromId);
    }
  }

  sortArticlesByDate(articleList: article[]) {
      articleList.forEach((subCategory: any) => {
        if (subCategory.articleList?.length) {
          subCategory.articleList = this.dateUtils.sortByPublishedDate(subCategory.articleList);
        }
        
        if (subCategory.innerCategories?.length) {
          this.sortArticlesByDate(subCategory.innerCategories);
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
        }

        if (subCategory.innerCategories?.length) {
          subCategory.innerCategories.forEach((innerCategory: any) => {
            if (innerCategory.articleList?.length) {
              const innerCategoryDecadeArticles = innerCategory.articleList.filter((article: any) => article.decade === this.selectedDecade);
              this.decadeWiseArticleList.push(...innerCategoryDecadeArticles);
            }
          })
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

  navigateToArticle(id: string | undefined, isDecadeView = false, fromId?: string) {
    this.router.navigate(
      ['/details', id, ParamType.Article],
      {
        queryParams: {
          from: fromId ?? this.selectedId
        },
        queryParamsHandling: 'merge'
      }
    );
  }
  
  visibleArticles(articlesList: any[]) {
    return articlesList.slice(0, this.visibleCount);
  }

  loadMore() {
    const scrollTop = window.scrollY;
    this.visibleCount += this.incrementBy;
    this.retainScrollPosition(scrollTop);
  }

  retainScrollPosition(scrollTop: number) {
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        window.scrollTo({
          top: scrollTop,
          behavior: 'auto'
        });
      });
    });
  }
  
}
