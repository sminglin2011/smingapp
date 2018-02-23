import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Output()
  @Input()
  formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
