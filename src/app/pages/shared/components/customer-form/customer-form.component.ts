import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppUtils } from '../../../../tools/app.utils';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Output()
  @Input()
  formGroup: FormGroup;
  @Input()
  compulsoryFields: Array<any>;
  constructor(private appUtils: AppUtils) { }

  ngOnInit() {
    // if (!this.formGroup) {
    //   this.formGroup = this.appUtils.initFormGroup(new Customer(), this.compulsoryFields);
    // }
    // console.log('customer form group = ' , this.formGroup);
  }

}
