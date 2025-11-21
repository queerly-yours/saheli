import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3, heroXMark, heroMagnifyingGlass, heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgIconsModule.withIcons({ heroBars3, heroXMark, heroMagnifyingGlass, heroChevronDown, heroChevronUp })
    ),
    provideRouter(routes, withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',   // <-- scrolls to top on route change
        anchorScrolling: 'enabled'
      })
    ),
  ]
});