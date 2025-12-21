import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article-slider',
  imports: [],
  templateUrl: './article-slider.component.html',
  styleUrl: './article-slider.component.scss'
})
export class ArticleSliderComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  cards = [
    { title: 'AFSPA DOWN DOWN', subtitle: 'Remembering Manorama. In Solidarity with Sharmila', date:'2014', category:'solidarity', image: '../../../../assets/home/articles-slider/1.png' },
    { title: "'Kaun jaat' gets a new avatar", subtitle: 'At Hyderabad Central University', date:'2011', category:'contesting caste', image: '../../../../assets/home/articles-slider/2.png' },
    { title: 'Miniscule Minority', subtitle: 'Supreme Court Recriminalises homosexuality', date:'2013', category:'sexualities and gender', image: '../../../../assets/home/articles-slider/3.png' },
    { title: 'Our Struggle against communalism', subtitle: 'Forefronting Women’s Rights', date:'2006', category:'countering communalism', image: '../../../../assets/home/articles-slider/4.png' },
    { title: 'AFSPA DOWN DOWN', subtitle: 'Remembering Manorama. In Solidarity with Sharmila', date:'2014', category:'solidarity', image: '../../../../assets/home/articles-slider/1.png' },
    { title: "'Kaun jaat' gets a new avatar", subtitle: 'At Hyderabad Central University', date:'2011', category:'contesting caste', image: '../../../../assets/home/articles-slider/2.png' },
    { title: 'Miniscule Minority', subtitle: 'Supreme Court Recriminalises homosexuality', date:'2013', category:'sexualities and gender', image: '../../../../assets/home/articles-slider/3.png' },
    { title: 'Our Struggle against communalism', subtitle: 'Forefronting Women’s Rights', date:'2006', category:'countering communalism', image: '../../../../assets/home/articles-slider/4.png' },
    { title: 'AFSPA DOWN DOWN', subtitle: 'Remembering Manorama. In Solidarity with Sharmila', date:'2014', category:'solidarity', image: '../../../../assets/home/articles-slider/1.png' },
  ];

  showLeftArrow = false;
  showRightArrow = false;

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
}
