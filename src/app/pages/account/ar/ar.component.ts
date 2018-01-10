import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.css']
})
export class ArComponent implements OnInit {

  columns: any;
  constructor(private service: AccountService) { }

  ngOnInit() {
    this.loadColumns();
  }

  loadColumns() {
    this.service.getColumns().subscribe(
      data => {
        this.columns = data['columns'];
        console.log(this.columns, 'columns');
      }
    );
  }

}
