import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTraker } from './order-traker';

describe('OrderTraker', () => {
  let component: OrderTraker;
  let fixture: ComponentFixture<OrderTraker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTraker],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTraker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
