import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppUtils } from '../../../../tools/app.utils';
import { Customer } from '../../../models/customer.model';
import { ContactService } from '../../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  id = 0;
  msgs: Message[] = [];
  formGroup: FormGroup;
  compulsoryFields: Array<any> = new Array();
  constructor(private appUtils: AppUtils, private service: ContactService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.compulsoryFields.push('name', 'mobile', 'postalCode');
    if (!this.formGroup) {
      this.formGroup = this.appUtils.initFormGroup(
        new Customer(),
        this.compulsoryFields
      );
      console.log('new customer form group=', this.formGroup);
    }
    this.formGroup.valueChanges.subscribe(value => {
      console.log('change customer form value', value);
    });
    console.log('this.route==', this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      console.log('params==', params['id']);
      if (params['id']) {
        this.id = params['id'];
        this.service.loadCustomerById(this.id).subscribe(data => {
          console.log('get user form api user=', data);
          this.formGroup.patchValue(data);
        });
      }
    });
  }

  submitForm() {
    console.log('save form =', this.formGroup.value);
    this.service.save(this.formGroup.value).subscribe(
      result => {
        this.msgs.length = 0;
        this.msgs.push(AppUtils.SUCCESS_MESSAGE);
        setTimeout(() => {
          this.close();
        }, 300);
      },
      err => console.error('error', err)
    );
  }
  close() {
    this.router.navigate(['/pages/contact/customer']);
  }
}
