import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  template: `<app-modulepage [items]="menuitems"></app-modulepage>`,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  menuitems;
  constructor(private router: Router, private service: InventoryService) { }
  ngOnInit() {
    this.loadSideMenu();
  }

  loadSideMenu() {
    this.service.loadSideMenu().subscribe(data => {
      this.menuitems = data['data'];
    });
  }
}
