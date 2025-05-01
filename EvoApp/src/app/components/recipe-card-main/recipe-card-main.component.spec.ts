import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardMainComponent } from './recipe-card-main.component';

describe('RecipeCardComponent', () => {
  let component: RecipeCardMainComponent;
  let fixture: ComponentFixture<RecipeCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
