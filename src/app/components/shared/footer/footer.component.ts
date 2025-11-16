import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerLinkList = [
    {
      label: 'About Us',
      routeLink: '/'
    },
    {
      label: 'Archives',
      routeLink: '/'
    },
    {
      label: 'Publications',
      routeLink: '/'
    },
    {
      label: 'Gallery',
      routeLink: '/'
    },
    {
      label: 'Connect',
      routeLink: '/'
    },
  ]

}
