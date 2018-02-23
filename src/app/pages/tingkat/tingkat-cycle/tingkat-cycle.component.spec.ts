import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TingkatCycleComponent } from './tingkat-cycle.component';

describe('TingkatCycleComponent', () => {
  let component: TingkatCycleComponent;
  let fixture: ComponentFixture<TingkatCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TingkatCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TingkatCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
