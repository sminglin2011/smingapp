import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dc1',
  templateUrl: './dc1.component.html',
  styleUrls: ['./dc1.component.css']
})
export class Dc1Component implements OnInit {

  @Input() inputParam;
  @Input() inputParam2;
  // @Output() outputFn1: EventEmitter<>;
  constructor() { }

  ngOnInit() {
  }

}
