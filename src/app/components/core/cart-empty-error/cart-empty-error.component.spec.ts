import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEmptyErrorComponent } from './cart-empty-error.component';

describe('CartEmptyErrorComponent', () => {
  let component: CartEmptyErrorComponent;
  let fixture: ComponentFixture<CartEmptyErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartEmptyErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEmptyErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
