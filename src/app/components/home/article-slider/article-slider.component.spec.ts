import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSliderComponent } from './article-slider.component';

describe('ArticleSliderComponent', () => {
  let component: ArticleSliderComponent;
  let fixture: ComponentFixture<ArticleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
