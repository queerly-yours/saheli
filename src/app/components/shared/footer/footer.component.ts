import { NgFor } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { footerLinkList, FooterType } from '../../../utils/footer.utils';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerLinkList = footerLinkList;
  showForm = false;
  googleFormUrl!: SafeResourceUrl;
  loadingIframe = true;
  showIframe = false;


  constructor(private router: Router, private sanitizer: DomSanitizer, private cd: ChangeDetectorRef) { }


  navigate(routeLink: string, type: FooterType) {
    if (type === FooterType.REDIRECT) {
      this.router.navigate([routeLink]);
    }
    else if (type === FooterType.OPEN) {
      this.openForm();
    }
  }

  openForm() {
    this.googleFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLSdHoLIFEDe27RgX_3aCPFWdkvQN66sQzevMQuNgJQwozfTy7g/viewform?embedded=true'
    );
    this.showForm = true;
    this.showIframe = false;

    setTimeout(() => {
      this.showIframe = true;
    }, 10);
  }

  closeForm() {
    this.showForm = false;
    this.loadingIframe = true;
    this.showIframe = false;
    this.cd.detectChanges();
  }
}
