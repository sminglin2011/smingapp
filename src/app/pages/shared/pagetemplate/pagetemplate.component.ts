import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagetemplate',
  template: `
  <div class="col-xs-0 col-sm-3 col-md-2 sidebar-offcanvas" [collapse]="sidemenuCollapsed">
  <span *ngIf="!sidemenuCollapsed" class="glyphicon glyphicon-triangle-right" aria-hidden="true"
  (click)="sidemenuCollapse()"></span>Hide
  <app-sidebar [menuList]="menuList"></app-sidebar>
  </div>
  <div *ngIf="sidemenuCollapsed">
  <span class="glyphicon glyphicon-triangle-left" aria-hidden="true"
  (click)="sidemenuCollapse()">show</span>
  </div>
  <div class="contrainer">
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./pagetemplate.component.css']
})
export class PagetemplateComponent implements OnInit {

  @Input() menuList;
  sidemenuCollapsed: boolean;
  innerWidth: number;
  constructor() {}

  sidemenuCollapse() {
    this.sidemenuCollapsed = !this.sidemenuCollapsed;
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidemenuCollapsed = true;
    } else {
      this.sidemenuCollapsed = false;
    }
  }

}
