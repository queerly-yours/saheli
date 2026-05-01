import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { cardDetailsList } from '../../../utils/articles-slider';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-article-slider',
  imports: [],
  templateUrl: './article-slider.component.html',
  styleUrl: './article-slider.component.scss'
})
export class ArticleSliderComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  cards = cardDetailsList;

  showLeftArrow = false;
  showRightArrow = false;

  constructor(private navService: NavigationService) {}

  ngAfterViewInit() {
    this.checkArrows();
  }

  scrollLeft() {
    const amount = this.getScrollAmount();
    this.scrollContainer.nativeElement.scrollBy({
      left: -amount,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    const amount = this.getScrollAmount();
    this.scrollContainer.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }

  checkArrows() {
    const el = this.scrollContainer.nativeElement;

    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  navigateToArticle(id: string | undefined) {
    this.navService.toArticle(id);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkArrows();
  }

  private getScrollAmount(): number {
    const container = this.scrollContainer?.nativeElement as HTMLElement | undefined;
    const firstCard = container?.querySelector('.card') as HTMLElement | null;

    if (!container || !firstCard) {
      return 300;
    }

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.gap || '0');
    return firstCard.getBoundingClientRect().width + gap;
  }
}
