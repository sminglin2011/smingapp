import { Component, OnInit, Input } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';
import { fadeIn } from '../../../animations/fadeIn';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-modulepage',
  templateUrl: './modulepage.component.html',
  styleUrls: ['./modulepage.component.css'],
  animations: [ flyIn, fadeIn]
})
export class ModulepageComponent implements OnInit {
  hideorshowsidebar = true;
  @Input()
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
  }

  hideorshow() {
    console.log(this.hideorshowsidebar, 'hide or show');
    this.hideorshowsidebar = !this.hideorshowsidebar;
  }
}
