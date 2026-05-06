import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'publications',
        redirectTo: 'details/14/category',
        pathMatch: 'full',
    },
    {
        path: 'details/:id/:type',
        component: DetailsComponent,
    },
    {
        path: 'details/:id/:type/:articleId',
        component: ArticleComponent,
    },
    { path: 'search', component: SearchResultsComponent },
    { path: 'gallery', component: GalleryComponent },

  // Hindi
  {
    path: 'hi',
    children: [
      { path: '', component: HomeComponent },
      { path: 'publications', redirectTo: 'details/14/category', pathMatch: 'full' },
      { path: 'details/:id/:type', component: DetailsComponent },
      { path: 'details/:id/:type/:articleId', component: ArticleComponent },
      { path: 'search', component: SearchResultsComponent },
      { path: 'gallery', component: GalleryComponent },
    ],
  },
];
