import { CommonModule } from '@angular/common';
import { afterNextRender, Component, effect, Injector, Input, runInInjectionContext } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { subCategory } from '../../../utils/data-model';
import { ArticleSummaryComponent } from "../article-summary/article-summary.component";
import { NavigationService } from '../../../services/navigation/navigation.service';
import { initialVisibilityCount } from '../../../utils/constants';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, NgIconComponent, ArticleSummaryComponent, AccordionComponent],
  providers: [provideIcons({ heroChevronDown, heroChevronUp })],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  host: { '[class.is-nested]': 'isNested' }
})
export class AccordionComponent {

  @Input() panels: subCategory[] = [];
  @Input() isNested = false;
  openPanelId: string | null = null;
  initialVisibilityCount = initialVisibilityCount;
  visibleCount = 10;
  incrementBy = 10;
  currentLang = 'en';

  constructor(private injector: Injector, private navService: NavigationService, public languageService: LanguageService) { 
    effect(() => {
      console.log('Language changed to:', this.languageService.lang());
      this.currentLang = this.languageService.lang();
    });
  }

  ngOnChanges() { }

  toggle(panelId: string, headerEl?: HTMLElement) {
    this.visibleCount = 10;
    if (!this.isNested && headerEl) {
      const beforeTop = headerEl.getBoundingClientRect().top;
      this.openPanelId = this.openPanelId === panelId ? null : panelId;
      runInInjectionContext(this.injector, () => {
        afterNextRender(() => {
          const afterTop = headerEl.getBoundingClientRect().top;
          const delta = afterTop - beforeTop;
          window.scrollBy({ top: delta, behavior: 'smooth' });
        });
      });
    } else {
      this.openPanelId = this.openPanelId === panelId ? null : panelId;
    }
  }

  isOpen(panelId: string) {
    return this.openPanelId === panelId;
  }

  visibleArticles(articlesList: subCategory['articleList']) {
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
        window.scrollTo({ top: scrollTop, behavior: 'auto' });
      });
    });
  }

  navigateToArticle(id: string | undefined) {
    this.navService.toArticle(id, this.openPanelId);
  }
}
