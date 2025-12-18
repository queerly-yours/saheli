import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLoadMore]',
  exportAs: 'appLoadMore'
})
export class LoadMoreDirective<T> {

  @Input('appLoadMore') items: T[] = [];
  @Input() step = 15;

  visibleCount = 0;

  ngOnInit() {
    this.visibleCount = this.step;
  }

  get visibleItems(): T[] {
    return this.items.slice(0, this.visibleCount);
  }

  loadMore() {
    this.visibleCount += this.step;
  }

  get hasMore(): boolean {
    return this.visibleCount < this.items.length;
  }
}
