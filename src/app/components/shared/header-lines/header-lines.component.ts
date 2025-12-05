import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-lines',
  imports: [NgClass],
  templateUrl: './header-lines.component.html',
  styleUrl: './header-lines.component.scss'
})
export class HeaderLinesComponent {
  @Input() years: string[] = [];
  @Input() selectedDecade: string | null = '';
  @Output() selectDecade = new EventEmitter<string>();

  ngOnInIt() { }

  onDecadeClick(decade: string) {
    this.selectedDecade = decade;
    this.selectDecade.emit(decade);
  }
}
