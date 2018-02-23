import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryMasterComponent } from './inventory-master/inventory-master.component';
import { InventoryService } from './inventory.service';
import { SharedModule } from '../shared/shared.module';
import { AppUtils } from '../../tools/app.utils';
import { ButtonModule, InputTextModule, CalendarModule,
  PasswordModule, PanelModule,
  GrowlModule, MessageModule,
  MessagesModule, DataTableModule, FieldsetModule, DropdownModule } from 'primeng/primeng';

const routes: Routes = [{
  path: '', component: InventoryComponent,
  children: [
    { path: '', component: InventoryMasterComponent },
    { path: 'master', component: InventoryMasterComponent }
  ]
}];

@NgModule({
  imports: [
    CommonModule, HttpModule, HttpClientModule, RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule, SharedModule,
    ButtonModule, InputTextModule, CalendarModule,
  PasswordModule, PanelModule,
  GrowlModule, MessageModule, DropdownModule,
  MessagesModule, DataTableModule, FieldsetModule
  ],
  declarations: [InventoryComponent, InventoryMasterComponent],
  providers: [ AppUtils, InventoryService ]
})
export class InventoryModule { }
