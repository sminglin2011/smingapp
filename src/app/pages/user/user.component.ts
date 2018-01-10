import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
  <app-pagetemplate [menuList]="list"></app-pagetemplate>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  list: any;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.router.navigateByUrl('user/userlist');
    this.loadSideMenu();
  }

  loadSideMenu() {
    this.service.getSubModule().subscribe(data => {
      this.list = data['data'];
    });
  }
}
