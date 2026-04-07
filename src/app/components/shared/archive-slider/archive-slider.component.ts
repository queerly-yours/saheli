import { Component, HostListener, Input, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight, heroXMark } from '@ng-icons/heroicons/outline';
import { archive, ArchiveImage } from '../../../utils/data-model';

@Component({
  selector: 'app-archive-slider',
  imports: [NgIcon],
  providers: [provideIcons({ heroChevronLeft, heroChevronRight, heroXMark })],
  templateUrl: './archive-slider.component.html',
  styleUrl: './archive-slider.component.scss'
})
export class ArchiveSliderComponent {

  @Input() archiveList: archive[] = [];
  @Input() currentLang = 'en';

  @ViewChildren('sliderTrack') sliderTracks!: QueryList<ElementRef>;

  lightboxOpen = false;
  lightboxItem: archive | null = null;
  lightboxImageIndex = 0;

  get lightboxImages(): ArchiveImage[] {
    return this.lightboxItem ? this.getImages(this.lightboxItem) : [];
  }

  get lightboxImage(): ArchiveImage | null {
    return this.lightboxImages[this.lightboxImageIndex] ?? null;
  }

  get lightboxHasPrev(): boolean {
    return this.lightboxImageIndex > 0;
  }

  get lightboxHasNext(): boolean {
    return this.lightboxImageIndex < this.lightboxImages.length - 1;
  }

  getImages(item: archive): ArchiveImage[] {
    if (item.images?.length) return item.images;
    if (item.archiveImg) {
      const label = this.currentLang === 'en' ? item.title : (item.hindiTitle ?? item.title);
      return [{ url: item.archiveImg, caption: label, alt: item.title }];
    }
    return [];
  }

  getTitle(item: archive): string {
    return this.currentLang === 'en' ? item.title : (item.hindiTitle ?? item.title);
  }

  scroll(index: number, direction: 'left' | 'right'): void {
    const tracks = this.sliderTracks.toArray();
    if (tracks[index]) {
      tracks[index].nativeElement.scrollBy({ left: direction === 'left' ? -270 : 270, behavior: 'smooth' });
    }
  }

  openLightbox(item: archive, imageIndex: number): void {
    this.lightboxItem = item;
    this.lightboxImageIndex = imageIndex;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.lightboxItem = null;
  }

  prevImage(): void {
    if (this.lightboxHasPrev) this.lightboxImageIndex--;
  }

  nextImage(): void {
    if (this.lightboxHasNext) this.lightboxImageIndex++;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }
}
