import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp, heroChevronLeft, heroChevronRight, heroXMark } from '@ng-icons/heroicons/outline';
import { gallerySections, GallerySection, GalleryImage } from '../../utils/gallery-data';
import { HeaderLinesComponent } from '../shared/header-lines/header-lines.component';
import { CategoryPopComponent } from '../shared/category-pop/category-pop.component';

@Component({
  selector: 'app-gallery',
  imports: [NgClass, NgIconComponent, HeaderLinesComponent, CategoryPopComponent],
  providers: [provideIcons({ heroChevronDown, heroChevronUp, heroChevronLeft, heroChevronRight, heroXMark })],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  sections: GallerySection[] = gallerySections;
  openSectionId: string | null = null;

  lightboxOpen = false;
  lightboxSectionId: string | null = null;
  lightboxImageIndex = 0;

  get lightboxSection(): GallerySection | null {
    return this.sections.find(s => s.id === this.lightboxSectionId) ?? null;
  }

  get lightboxImage(): GalleryImage | null {
    return this.lightboxSection?.images[this.lightboxImageIndex] ?? null;
  }

  get lightboxHasPrev(): boolean {
    return this.lightboxImageIndex > 0;
  }

  get lightboxHasNext(): boolean {
    return !!this.lightboxSection && this.lightboxImageIndex < this.lightboxSection.images.length - 1;
  }

  toggleSection(id: string): void {
    this.openSectionId = this.openSectionId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openSectionId === id;
  }

  openLightbox(sectionId: string, imageIndex: number): void {
    this.lightboxSectionId = sectionId;
    this.lightboxImageIndex = imageIndex;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.lightboxSectionId = null;
  }

  prevImage(): void {
    if (this.lightboxHasPrev) {
      this.lightboxImageIndex--;
    }
  }

  nextImage(): void {
    if (this.lightboxHasNext) {
      this.lightboxImageIndex++;
    }
  }

  scrollSlider(container: HTMLElement, direction: 'left' | 'right'): void {
    container.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }
}
