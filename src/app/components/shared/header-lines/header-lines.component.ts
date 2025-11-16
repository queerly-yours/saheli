import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-lines',
  imports: [],
  templateUrl: './header-lines.component.html',
  styleUrl: './header-lines.component.scss'
})
export class HeaderLinesComponent {
  @Input() years: string[] = [];
}
