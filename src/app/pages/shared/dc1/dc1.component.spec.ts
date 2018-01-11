import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc1Component } from './dc1.component';

describe('Dc1Component', () => {
  let component: Dc1Component;
  let fixture: ComponentFixture<Dc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
