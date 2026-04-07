import { Component, ElementRef, ViewChild } from '@angular/core';
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
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
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
}
