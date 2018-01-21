import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTingkatComponent } from './add-tingkat.component';

describe('AddTingkatComponent', () => {
  let component: AddTingkatComponent;
  let fixture: ComponentFixture<AddTingkatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTingkatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTingkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
