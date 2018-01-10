import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  columns: any;
  datas: any;
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
    this.service.getTableData().subscribe((data) => {
      this.datas = data['data'];
    });
  }
}
