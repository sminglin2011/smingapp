import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  columns: any;
  datas: any;
  errMsg: Message[] = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.loadColumns();
    this.loadData();
  }

  loadColumns() {
    this.service.getColumns().subscribe(
      data => {
        this.columns = data['columns'];
        console.log(this.columns, 'columns');
      }
    );
  }
  loadData() {
    this.service.getTableData().subscribe(
      (data) => {
      console.log('list component got data = ', data);
      this.datas = data; // ['data'];
      }, err => this.errMsg.push({severity: 'error', summary: '', detail: <any>err}));
  }
}
