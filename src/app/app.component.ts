import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { LanguageService } from './services/language/language.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'saheli-draft-1';
  private document = inject(DOCUMENT);

  constructor(public languageService: LanguageService) {
    effect(() => {
      const isEnglish = this.languageService.isEnglish();
      this.document.body.classList.toggle('english-mode', isEnglish);
      this.document.body.classList.toggle('hindi-mode', !isEnglish);
    });
  }

  ngOnInit(): void {  }
}
