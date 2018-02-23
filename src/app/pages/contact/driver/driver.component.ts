import { Component, OnInit } from '@angular/core';
import { Message, LazyLoadEvent } from 'primeng/primeng';
import { Driver } from '../../models/driver.model';
import { QueryParam } from '../../models/queryParam.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AppUtils } from '../../../tools/app.utils';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  formGroup: FormGroup;
  compulsoryFields = new Array();
  columns: any;
  datas: any;
  msgs: Message[] = [];

  totalRecords = 0;
  rows = 10;
  pageSizes = [5, 10, 20, 50, 100];
  sortF: any;
  sortO = 1;
  selectedRow: Driver;
  queryParam = new QueryParam();

  constructor(private appUtils: AppUtils, private service: ContactService, private router: Router) {}

  ngOnInit() {
    this.compulsoryFields.push('name', 'mobile', 'vehicleNo');
    if (!this.formGroup) {
      this.formGroup = this.appUtils.initFormGroup(new Driver, this.compulsoryFields);
    }
  }

  loadCarsLazy(event: LazyLoadEvent) {
    console.log('lazy load event', event);
    setTimeout(() => {
      this.queryParam.sortField = event.sortField;
      this.queryParam.sortOrder = event.sortOrder;
      this.queryParam.page = event.first === 0 ? 0 : (event.first / event.rows);
      this.queryParam.size = event.rows;
      this.service.loadDriverList(this.queryParam).subscribe(
        data => {
          console.log('list component got data = ', data['content']);
          this.datas = data['content']; // ['data'];
          this.totalRecords = data['totalElements'];
          this.rows = data['size'];
        },
        err =>
          this.msgs.push({ severity: 'error', summary: '', detail: <any>err })
      );
    }, 100);
  }

  changeSort(event) {
    if (!event.order) {
      this.sortF = 'id';
    } else {
      this.sortF = event.field;
    }
  }

  dblClickRow(event) {
    console.log('dbl click', event);
    this.formGroup.patchValue(event.data);
  }

  submitForm() {
    this.service.saveDriver(this.formGroup.value).subscribe(
      result => {
        this.msgs.length = 0;
        this.msgs.push(AppUtils.SUCCESS_MESSAGE);
        setTimeout(() => {
          this.resetForm();
          this.service.loadDriverList(this.queryParam).subscribe(
            data => {
              console.log('list component got data = ', data['content']);
              this.datas = data['content']; // ['data'];
              this.totalRecords = data['totalElements'];
              this.rows = data['size'];
            },
            err =>
              this.msgs.push({ severity: 'error', summary: '', detail: <any>err })
          );
        }, 300);
      },
      err => console.error('error', err)
    );
  }
  resetForm() {
    this.formGroup = this.appUtils.initFormGroup(new Driver, this.compulsoryFields);
  }
}
