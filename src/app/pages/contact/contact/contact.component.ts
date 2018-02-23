import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  template: `<app-modulepage [items]="menuitems"></app-modulepage>`, // './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  menuitems;
  constructor(private router: Router, private service: ContactService) { }
  ngOnInit() {
    this.loadSideMenu();
  }

  loadSideMenu() {
    this.service.loadSideMenu().subscribe(data => {
      this.menuitems = data['data'];
    });
  }
}
