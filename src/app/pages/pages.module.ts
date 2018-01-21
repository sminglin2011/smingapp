import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/primeng';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages.component';

// 这个 routes 没有用了转去 app.module 里配置了
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
  { path: 'tingkat', loadChildren: './pages/tingkat/tingkat.module#TingkatModule' }

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ChartModule],
  declarations: [],
  exports: []
})
export class PagesModule {}
