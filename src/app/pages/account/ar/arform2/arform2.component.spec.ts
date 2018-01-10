import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arform2Component } from './arform2.component';

describe('Arform2Component', () => {
  let component: Arform2Component;
  let fixture: ComponentFixture<Arform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
