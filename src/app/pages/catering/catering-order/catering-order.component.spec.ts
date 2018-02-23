import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringOrderComponent } from './catering-order.component';

describe('CateringOrderComponent', () => {
  let component: CateringOrderComponent;
  let fixture: ComponentFixture<CateringOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
