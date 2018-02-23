import { Component, OnInit } from '@angular/core';
import { TingkatService } from './tingkat.service';

@Component({
  selector: 'app-tingkat',
  templateUrl: './tingkat.component.html',
  styleUrls: ['./tingkat.component.css']
})
export class TingkatComponent implements OnInit {

  menuitems = [];
  constructor(private service: TingkatService) { }

  ngOnInit() {
    this.service.loadSideMenu().subscribe(data => {
      this.menuitems = data['data'];
    });
  }

}
