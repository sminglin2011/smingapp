import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTingkatComponent } from './query-tingkat.component';

describe('QueryTingkatComponent', () => {
  let component: QueryTingkatComponent;
  let fixture: ComponentFixture<QueryTingkatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryTingkatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTingkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
