import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardLiteComponent } from './recipe-card-lite.component';

describe('RecipeCardLiteComponent', () => {
  let component: RecipeCardLiteComponent;
  let fixture: ComponentFixture<RecipeCardLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
