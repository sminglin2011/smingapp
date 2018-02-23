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
import { ButtonModule, InputTextModule, PasswordModule, PanelModule, GrowlModule, MessageModule,
MessagesModule,
CalendarModule,
DataTableModule} from 'primeng/primeng';
import { UserformComponent } from './userform/userform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppUtils } from '../../tools/app.utils';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: DeshboadComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'dashboard', component: DeshboadComponent },
      { path: 'add', component: UserformComponent},
      { path: 'add/:id', component: UserformComponent}
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule, ReactiveFormsModule,
    SharedModule, ButtonModule, InputTextModule, CalendarModule,
    PasswordModule, PanelModule,
    GrowlModule, MessageModule,
    MessagesModule, DataTableModule
  ],
  declarations: [
    UserComponent, UserlistComponent, UserformComponent
  ],
  providers: [UserService, AppUtils]
})
export class UserModule {}
