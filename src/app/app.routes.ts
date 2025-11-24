import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'details/:id/:type',
        component: DetailsComponent,
    },
    {
        path: 'details/:id/:type/:articleId',
        component: ArticleComponent,
    },
    {
    path: 'search',
    loadComponent: () =>
      import('./components/shared/search/search-results/search-results.component')
        .then(m => m.SearchResultsComponent)
  },
];
