import { Component, OnInit, Input, Output, ViewChild, ViewContainerRef, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Dc1Component } from '../shared/dc1/dc1.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { animate } from '@angular/animations';
import { flyIn } from '../../animations/fly-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-user',
  // template: `
  // <app-pagetemplate [menuList]="list"></app-pagetemplate>
  // <ng-template #dialogContainer></ng-template>
  // `,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [flyIn, fadeIn]
})
export class UserComponent implements OnInit {
  menuitems;
  constructor(private router: Router, private service: UserService, private resolver: ComponentFactoryResolver) { }
  ngOnInit() {
    this.loadSideMenu();
  }

  loadSideMenu() {
    this.service.getSubModule().subscribe(data => {
      this.menuitems = data['data'];
    });
  }
}
