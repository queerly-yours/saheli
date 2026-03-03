import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  TemplateRef
} from '@angular/core';
import { PopoverComponent } from '../../../components/shared/popover/popover.component';

@Directive({
  selector: '[appPopover]',
  standalone: true
})
export class PopoverDirective {

  @Input('appPopover') template!: TemplateRef<any>;
  @Input() popoverData!: any;

  private popoverRef?: ComponentRef<PopoverComponent>;
  private hideTimeout: any;

  constructor(
    private el: ElementRef<HTMLElement>,
    private vcr: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  show() {
    clearTimeout(this.hideTimeout);
    if (this.popoverRef) return;

    this.popoverRef = this.vcr.createComponent(PopoverComponent);
    this.popoverRef.instance.content = this.template;
    this.popoverRef.instance.context = {
      $implicit: this.popoverData
    };

    const popoverEl = this.popoverRef.location.nativeElement;
    popoverEl.style.position = 'absolute';
    popoverEl.style.zIndex = '1000';

    document.body.appendChild(popoverEl);

    requestAnimationFrame(() => {
      this.setSmartPosition(popoverEl);
    });

    // keep open when hovering popover
    popoverEl.addEventListener('mouseenter', () => {
      clearTimeout(this.hideTimeout);
    });

    popoverEl.addEventListener('mouseleave', () => {
      this.hide();
    });
  }

  @HostListener('mouseleave')
  onLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hide();
    }, 150);
  }

  private setSmartPosition(popoverEl: HTMLElement) {
    const triggerRect = this.el.nativeElement.getBoundingClientRect();
    const popoverRect = popoverEl.getBoundingClientRect();

    const spacing = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top: number;
    let left: number;

    // 🔥 Decide top or bottom
    const enoughSpaceAbove = triggerRect.top >= popoverRect.height + spacing;

    if (enoughSpaceAbove) {
      top = triggerRect.top - popoverRect.height - spacing;
      this.popoverRef!.instance.position = 'top';
    } else {
      top = triggerRect.bottom + spacing;
      this.popoverRef!.instance.position = 'bottom';
    }

    // 🔥 Horizontal positioning (prevent overflow)
    left = triggerRect.left;

    if (left + popoverRect.width > viewportWidth - 8) {
      left = viewportWidth - popoverRect.width - 8;
    }

    if (left < 8) {
      left = 8;
    }

    popoverEl.style.top = `${top + window.scrollY}px`;
    popoverEl.style.left = `${left + window.scrollX}px`;
  }

  private hide() {
    if (!this.popoverRef) return;
    this.popoverRef.destroy();
    this.popoverRef = undefined;
  }
}