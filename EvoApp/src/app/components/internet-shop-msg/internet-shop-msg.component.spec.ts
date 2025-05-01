import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetShopMsgComponent } from './internet-shop-msg.component';

describe('InternetShopMsgComponent', () => {
  let component: InternetShopMsgComponent;
  let fixture: ComponentFixture<InternetShopMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetShopMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetShopMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
