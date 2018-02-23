import { Component, OnInit } from '@angular/core';
import { TingkatService } from '../tingkat.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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
  constructor(private service: TingkatService, private fb: FormBuilder) {
    // this.myGroup = this.fb.group({
    //   myDate: '11/01/2018'
    // });
  }
  myGroup: FormGroup;
  ngOnInit() {}

  search() {
    // console.log('myDate======', this.myGroup);
    this.service.getTableData().subscribe(data => {
      this.datas = data['data'];
    });
  }
}
