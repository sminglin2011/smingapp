import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  @Input() item: any;
  menuitemCollapsed = true;
  constructor() {}

  ngOnInit() {}
}
