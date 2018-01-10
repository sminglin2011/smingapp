import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { AccountService } from './account.service';
import { ArComponent } from './ar/ar.component';
import { ArformComponent } from './ar/arform/arform.component';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { Arform2Component } from './ar/arform2/arform2.component';
import { Ng2Webstorage } from 'ngx-webstorage';

const routes: Routes = [
  { path: '', component: AccountComponent, children: [
    { path: 'ar', component: ArComponent },
    { path: 'arform', component: ArformComponent },
    { path: 'arform2', component: Arform2Component }
  ] }
];
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    DragulaModule,
    Ng2Webstorage,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AccountComponent, ArComponent, ArformComponent, Arform2Component],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
