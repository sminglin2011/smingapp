import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArformComponent } from './arform.component';

describe('ArformComponent', () => {
  let component: ArformComponent;
  let fixture: ComponentFixture<ArformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
