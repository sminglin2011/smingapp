import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  moduleCollapsed = true;
  @Input()
  moduleList: any;
  @ViewChild(TemplateRef) welcome;
  constructor() { }

  ngOnInit() {
  }

}
