import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPopComponent } from './category-pop.component';

describe('CategoryPopComponent', () => {
  let component: CategoryPopComponent;
  let fixture: ComponentFixture<CategoryPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
