import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/primeng';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  { path: '', children: [
  ]},
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule'},
    { path: 'user', loadChildren: './pages/user/user.module#UserModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class PagesModule { }
