import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Messages, LazyLoadEvent } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { QueryParam } from '../../models/queryParam.model';
import { Customer } from '../../models/customer.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  columns: any;
  datas: any;
  msgs: Message[] = [];

  totalRecords = 0;
  rows = 10;
  pageSizes = [5, 10, 20, 50, 100];
  sortF: any;
  sortO = 1;
  selectedRow: Customer;
  queryParam = new QueryParam();

  constructor(private service: ContactService, private router: Router) {}

  ngOnInit() {
  }

  loadCarsLazy(event: LazyLoadEvent) {
    console.log('lazy load event', event);
    setTimeout(() => {
      this.queryParam.sortField = event.sortField;
      this.queryParam.sortOrder = event.sortOrder;
      this.queryParam.page = event.first === 0 ? 0 : (event.first / event.rows);
      this.queryParam.size = event.rows;
      this.service.loadCustomerList(this.queryParam).subscribe(
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
    this.router.navigate(['/pages/contact/addCustomer'], {queryParams: {id: event.data.id}});
  }
}
