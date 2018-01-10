import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-arform2',
  templateUrl: './arform2.component.html',
  styleUrls: ['./arform2.component.css']
})
export class Arform2Component implements OnInit {

  constructor(private storate: SessionStorageService) { }

  user: any;
  ngOnInit() {
    this.getStorateFromSession();
  }

  getStorateFromSession() {
    this.user = this.storate.retrieve('tempObj');
    console.log(this.user, 'user===');
  }

}
