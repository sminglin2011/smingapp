import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagetemplate',
  templateUrl: './pagetemplate.component.html',
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
