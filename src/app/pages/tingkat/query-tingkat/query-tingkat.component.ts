import { Component, OnInit } from '@angular/core';
import { TingkatService } from '../tingkat.service';

@Component({
  selector: 'app-query-tingkat',
  templateUrl: './query-tingkat.component.html',
  styleUrls: ['./query-tingkat.component.css']
})
export class QueryTingkatComponent implements OnInit {
  columns = [
    { title: 'NAME', field: 'name' },
    { title: 'EMAIL', field: 'email' },
    { title: 'ADDRESS', field: 'address.address1' }
  ];
  datas;
  constructor(private service: TingkatService) {}

  ngOnInit() {}

  search() {
    this.service.getTableData().subscribe(data => {
      this.datas = data['data'];
    });
  }
}
