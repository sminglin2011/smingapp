import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { ResourceLoaderImpl } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_impl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  template: `
  <app-pagetemplate [menuList]="menulist"></app-pagetemplate>
  `,
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  menulist: any;
  constructor(private router: Router, private service: AccountService) { }

  ngOnInit() {
    this.router.navigateByUrl('account/ar');
    this.loadMenus();
  }

  loadMenus() {
    this.service.getSubModule().subscribe(data => {
      this.menulist = data['data'];
    });
  }

}
