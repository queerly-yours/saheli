import { afterNextRender, Component, Injector, Input, runInInjectionContext } from '@angular/core';
import { subCategory } from '../../../utils/data-model';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { ArticleSummaryComponent } from '../article-summary/article-summary.component';
import { ParamType } from '../../../utils/utils';
import { Router } from '@angular/router';
import { initialVisibilityCount } from '../../../utils/constants';

@Component({
  selector: 'app-inner-accordion',
  imports: [CommonModule, NgIconComponent, ArticleSummaryComponent],
  providers: [provideIcons({ heroChevronDown, heroChevronUp })],
  templateUrl: './inner-accordion.component.html',
  styleUrl: './inner-accordion.component.scss'
})
export class InnerAccordionComponent {

  @Input() panels: subCategory[] = [];
  openPanelId: string | null = null;
  visibleCount = 10;
  incrementBy = 10;
  initialVisibilityCount = initialVisibilityCount;

  constructor(private injector: Injector, private router: Router) { }

  ngOnChanges() { }

  toggle(panelId: string) {
    this.visibleCount = 10;
    this.openPanelId = this.openPanelId === panelId ? null : panelId;
  }

  isOpen(panelId: string) {
    return this.openPanelId === panelId;
  }

  navigateToArticle(id: string | undefined) {
    this.router.navigate(
      ['/details', id, ParamType.Article],
      {
        queryParams: {
          from: this.openPanelId
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
