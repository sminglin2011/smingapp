import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-arform',
  templateUrl: './arform.component.html',
  styleUrls: ['./arform.component.css']
})
export class ArformComponent implements OnInit {

  user: any;

  constructor(private router: Router, private storage: SessionStorageService) {
    this.user = {
      name: 'sming',
      email: 'sminglin2011@gmail.com',
      address: {
        address1: ''
      }
    };
  }
  submitForm(ngform: NgForm) {
    console.log(this.user, 'submit data', ngform.value);
  }
  ngOnInit() {
  }
  nextpage() {
    this.storage.store('tempObj', this.user);
    this.router.navigateByUrl('account/arform2');
  }

}
