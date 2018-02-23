import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppUtils } from '../../../tools/app.utils';
import { Driver } from '../../models/driver.model';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  @Output()
  @Input()
  formGroup: FormGroup;
  @Input()
  compulsoryFields: Array<any> = new Array();
  constructor(private appUtils: AppUtils) { }

  ngOnInit() {
  }

}
