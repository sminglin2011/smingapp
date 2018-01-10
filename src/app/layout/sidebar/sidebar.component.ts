import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() menuList: any;
  sidemenuCollapsed: boolean;
  innerWidth: number;
  constructor() {}

  ngOnInit() {}
  sidemenuCollapse() {
    this.sidemenuCollapsed = !this.sidemenuCollapsed;
  }

}
