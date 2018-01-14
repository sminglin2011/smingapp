import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';
import { UserlistComponent } from './userlist/userlist.component';
import { TablelistComponent } from '../shared/tablelist/tablelist.component';
import { PagesComponent } from '../pages.component';
import { DeshboadComponent } from '../shared/deshboad/deshboad.component';
import { ButtonModule, InputTextModule, PasswordModule, PanelModule } from 'primeng/primeng';
import { UserformComponent } from './userform/userform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: DeshboadComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'dashboard', component: DeshboadComponent },
      { path: 'add', component: UserformComponent}
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule, ButtonModule, InputTextModule,
    PasswordModule, PanelModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    UserComponent, UserlistComponent, UserformComponent
  ],
  providers: [UserService]
})
export class UserModule {}
