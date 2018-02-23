import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMasterComponent } from './inventory-master.component';

describe('InventoryMasterComponent', () => {
  let component: InventoryMasterComponent;
  let fixture: ComponentFixture<InventoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
