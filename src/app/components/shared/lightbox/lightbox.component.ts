import { Component, Input, Output, EventEmitter } from '@angular/core';
import { contentElement } from '../../../utils/constants';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent {

  @Input() isOpen: boolean = false;
  @Input() data!: any;
  @Input() imageURL!: string;
  @Input() articleId!: any;
  @Input() currentLang!: string;

  blocks = contentElement;

  @Output() close = new EventEmitter<void>();

  closeLightbox() {
    this.close.emit();
  }
}