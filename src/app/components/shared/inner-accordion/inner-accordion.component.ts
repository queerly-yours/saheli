import { Component, Input } from '@angular/core';
import { subCategory } from '../../../utils/data-model';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { ArticleSummaryComponent } from '../article-summary/article-summary.component';
import { ParamType } from '../../../utils/utils';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnChanges() { }

  toggle(panelId: string) {
    this.openPanelId = this.openPanelId === panelId ? null : panelId;
  }

  isOpen(panelId: string) {
    return this.openPanelId === panelId;
  }

  navigateToArticle(id: string | undefined) {
    this.router.navigate(['/details', id, ParamType.Article]);
  }

}
