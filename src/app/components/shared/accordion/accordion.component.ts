import { CommonModule } from '@angular/common';
import { afterNextRender, Component, Injector, Input, runInInjectionContext } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { subCategory } from '../../../utils/data-model';
import { ArticleSummaryComponent } from "../article-summary/article-summary.component";
import { InnerAccordionComponent } from "../inner-accordion/inner-accordion.component";
import { ParamType } from '../../../utils/utils';
import { Router } from '@angular/router';
import { initialVisibilityCount } from '../../../utils/constants';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, NgIconComponent, ArticleSummaryComponent, InnerAccordionComponent],
  providers: [provideIcons({ heroChevronDown, heroChevronUp })],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  @Input() panels: subCategory[] = [];
  openPanelId: string | null = null;
  initialVisibilityCount = initialVisibilityCount;


  constructor(private injector: Injector, private router: Router) { }

  ngOnChanges() {  }


  toggle(panelId: string, headerEl: HTMLElement) {
    this.visibleCount = 10;
    const beforeTop = headerEl.getBoundingClientRect().top;
    this.openPanelId = this.openPanelId === panelId ? null : panelId;
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        const afterTop = headerEl.getBoundingClientRect().top;
        const delta = afterTop - beforeTop;

        // 4️⃣ Undo the movement
        window.scrollBy({
          top: delta,
          behavior: 'smooth'
        });
      });
    });
  }

  isOpen(panelId: string) {
    return this.openPanelId === panelId;
  }

  visibleCount = 10;
  incrementBy = 10;
  
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
}
