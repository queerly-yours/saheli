import { Component, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroChevronDown, heroMagnifyingGlass, heroChevronUp } from '@ng-icons/heroicons/outline';
import { Router, RouterModule } from '@angular/router';
import { categories } from '../../../utils/category';
import { category, subCategory } from '../../../utils/data-model';
import { ParamType } from '../../../utils/utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, RouterModule],
  providers: [provideIcons({ heroBars3, heroMagnifyingGlass, heroChevronDown, heroChevronUp })],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownOpen = false;
  menu = categories;

  constructor(private router: Router) { }

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
      this.router.navigate(['/details/', item.id, ParamType.SubCategory]);
    }
    if ('isCategory' in item && item.isCategory && item.subCategoryList.length > 0) {
      this.toggleCategory(item);
    }

    if ('isCategory' in item && item.isCategory && item.subCategoryList.length === 0) {
      if (item.id !== '1')
        this.router.navigate(['/details/', item.id, ParamType.Category]);
    }
  }
}
