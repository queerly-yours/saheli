import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { footerLinkList, FooterType } from '../../../utils/footer.utils';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../../services/language/language.service';

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


  constructor(private router: Router, private sanitizer: DomSanitizer, private cd: ChangeDetectorRef, public languageService: LanguageService) { }


  navigate(item: typeof this.footerLinkList[0], type: FooterType) {
    if (type === FooterType.REDIRECT) {
      this.languageService.isEnglish() ? this.router.navigate([item.routeLink]) : this.router.navigate([item.hindiRouteLink]);
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
  
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: Event) {
    this.closeForm();
  }
}
