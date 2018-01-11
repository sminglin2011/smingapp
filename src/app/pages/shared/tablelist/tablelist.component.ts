import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  @Input() columns;
  @Input() datas;
  @ViewChild(TemplateRef) popbuttons;
  constructor() { }

  ngOnInit() {
  }

}
