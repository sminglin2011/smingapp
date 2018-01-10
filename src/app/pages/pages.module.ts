import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
