import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from 'primeng/components/common/message';
import { LazyLoadEvent } from 'primeng/primeng';
import { User } from '../../models/user.model';
import { query } from '@angular/animations';
import { Router } from '@angular/router';
import { QueryParam } from '../../models/queryParam.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  columns: any;
  datas: any;
  msgs: Message[] = [];

  totalRecords = 0;
  rows = 10;
  pageSizes = [5, 10, 20, 50, 100];
  sortF: any;
  sortO = -1;
  selectedRow: User;
  queryParam = new QueryParam();

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.loadColumns();
    // this.loadData();
  }

  loadColumns() {
    this.service.getColumns().subscribe(data => {
      this.columns = data['columns'];
      console.log(this.columns, 'columns');
    });
  }
  loadCarsLazy(event: LazyLoadEvent) {
    console.log('lazy load event', event);
    setTimeout(() => {
      this.queryParam.sortField = event.sortField;
      this.queryParam.sortOrder = event.sortOrder;
      this.queryParam.page = event.first === 0 ? 0 : (event.first / event.rows);
      this.queryParam.size = event.rows;
      this.service.getTableData(this.queryParam).subscribe(
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
    // this.router.navigate(['/pages/user/add', event.data.id]);
    this.router.navigate(['/pages/user/add'], {queryParams: {id: event.data.id}});
  }
}
