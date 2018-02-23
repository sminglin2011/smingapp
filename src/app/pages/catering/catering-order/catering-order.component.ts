import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering-order',
  templateUrl: './catering-order.component.html',
  styleUrls: ['./catering-order.component.css']
})
export class CateringOrderComponent implements OnInit {

  msgs = [];
  orders = [];
  constructor() { }

  ngOnInit() {
  }

}
