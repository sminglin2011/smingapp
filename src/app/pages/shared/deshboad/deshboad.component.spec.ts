import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboadComponent } from './deshboad.component';

describe('DeshboadComponent', () => {
  let component: DeshboadComponent;
  let fixture: ComponentFixture<DeshboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
