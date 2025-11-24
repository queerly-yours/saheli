import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NgIcon } from "@ng-icons/core";
import { SearchService } from './services/search/search.service';
import { articles } from './utils/all-articles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'saheli-draft-1';

  constructor( private searchSvc: SearchService) { }

  ngOnInit(): void {
    this.searchSvc.setArticles(articles)
  }
}
