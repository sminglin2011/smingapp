import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TingkatComponent } from './tingkat.component';

describe('TingkatComponent', () => {
  let component: TingkatComponent;
  let fixture: ComponentFixture<TingkatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TingkatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TingkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
