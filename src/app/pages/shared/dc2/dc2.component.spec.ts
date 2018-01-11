import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc2Component } from './dc2.component';

describe('Dc2Component', () => {
  let component: Dc2Component;
  let fixture: ComponentFixture<Dc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
