import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CateringService } from '../catering.service';

@Component({
  selector: 'app-catering',
  template: `<app-modulepage [items]="menuitems"></app-modulepage>`,
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  menuitems;
  constructor(private router: Router, private service: CateringService) { }
  ngOnInit() {
    this.loadSideMenu();
  }

  loadSideMenu() {
    this.service.loadSideMenu().subscribe(data => {
      this.menuitems = data['data'];
    });
  }
}
