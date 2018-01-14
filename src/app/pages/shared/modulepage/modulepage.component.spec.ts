import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulepageComponent } from './modulepage.component';

describe('ModulepageComponent', () => {
  let component: ModulepageComponent;
  let fixture: ComponentFixture<ModulepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
