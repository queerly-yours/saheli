import { Component, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroChevronDown, heroMagnifyingGlass, heroChevronUp, heroLanguage } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';
import { categories } from '../../../utils/category';
import { category, subCategory } from '../../../utils/data-model';
import { LanguageService } from '../../../services/language/language.service';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../search-box/search-box.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterModule, CommonModule, SearchBoxComponent],
  providers: [provideIcons({ heroBars3, heroMagnifyingGlass, heroChevronDown, heroChevronUp, heroLanguage })],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownOpen = false;
  menu = categories;

  constructor(private navService: NavigationService, public languageService: LanguageService) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleCategory(item: any) {
    this.menu.forEach(i => {
      if (i !== item) i.isOpen = false;
    });
    item.isOpen = !item.isOpen;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.hamburger-menu')) {
      this.dropdownOpen = false;
    }
  }

   resetMenu(): void {
     this.menu.forEach(i => {
      i.isOpen = false;
    });
  }

  decideNavigateOrExpand(item: category | subCategory) {
    if ('isSubcategory' in item && item.isSubcategory) {
      this.navService.toLangAwareSubCategory(item.id);
    }
    if ('isCategory' in item && item.isCategory && item.subCategoryList.length > 0) {
      this.toggleCategory(item);
    }
    if ('isCategory' in item && item.isCategory && item.subCategoryList.length === 0) {
      this.navService.toLangAwareCategory(item.id);
    }
  }

}
