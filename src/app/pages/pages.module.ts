import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/primeng';

import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  { path: '', component: PagesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
