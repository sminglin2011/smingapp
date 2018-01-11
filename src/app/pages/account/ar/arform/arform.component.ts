import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { WindowRef } from '../../../shared/winref/windowRef.service';
import { Dc1Component } from '../../../shared/dc1/dc1.component';

@Component({
  selector: 'app-arform',
  templateUrl: './arform.component.html',
  styleUrls: ['./arform.component.css']
})
export class ArformComponent implements OnInit {

  user: any;
  nativeWindow: any;
  constructor(private router: Router, private storage: SessionStorageService,
    private winRef: WindowRef, private cfr: ComponentFactoryResolver) {
    this.user = {
      name: 'sming',
      email: 'sminglin2011@gmail.com',
      address: {
        address1: ''
      }
    };
  }
  @ViewChild('dynamiTemp', {read: ViewContainerRef}) dynamiTemp: ViewContainerRef;
  submitForm(ngform: NgForm) {
    console.log(this.user, 'submit data', ngform.value);
  }
  ngOnInit() {
  }
  nextpage() {
    const dynamiCom = this.cfr.resolveComponentFactory(Dc1Component);
    this.dynamiTemp.createComponent(dynamiCom);
  }

}
