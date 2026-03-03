import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popover-box" [ngClass]="position">
      <ng-container
        *ngTemplateOutlet="content; context: context">
      </ng-container>
    </div>
  `,
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input({ required: true }) content!: TemplateRef<any>;
  @Input() context!: any;
  @Input() position: 'top' | 'bottom' = 'top';
}