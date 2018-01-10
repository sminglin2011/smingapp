import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';
import { UserlistComponent } from './userlist/userlist.component';
import { TablelistComponent } from '../shared/tablelist/tablelist.component';
import { PagesComponent } from '../pages.component';
import { DeshboadComponent } from '../shared/deshboad/deshboad.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'userlist', component: UserlistComponent },
      { path: 'dashboard', component: DeshboadComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    UserComponent, UserlistComponent
  ],
  providers: [UserService]
})
export class UserModule {}
