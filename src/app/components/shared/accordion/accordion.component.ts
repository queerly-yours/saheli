import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { subCategory } from '../../../utils/data-model';
import { ArticleSummaryComponent } from "../article-summary/article-summary.component";
import { InnerAccordionComponent } from "../inner-accordion/inner-accordion.component";

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

  ngOnChanges() {
    console.log(this.panels);
  }


  toggle(panelId: string) {
    this.openPanelId = this.openPanelId === panelId ? null : panelId;
  }

  isOpen(panelId: string) {
    return this.openPanelId === panelId;
  }
}
