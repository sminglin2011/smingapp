import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppUtils } from '../../tools/app.utils';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule, InputTextModule, CalendarModule,
  PasswordModule, PanelModule,
  GrowlModule, MessageModule,
  MessagesModule, DataTableModule, FieldsetModule, TabViewModule, DataGridModule,
  TreeTableModule, DropdownModule, BlockUIModule } from 'primeng/primeng';
import { CateringComponent } from './catering/catering.component';
import { MenuSetupComponent } from './menu-setup/menu-setup.component';
import { CateringService } from './catering.service';
import { MenuFormComponent } from './menu-setup/menu-form/menu-form.component';
import { InventoryService } from '../inventory/inventory.service';
import { CateringOrderComponent } from './catering-order/catering-order.component';
import { NewOrderComponent } from './catering-order/new-order/new-order.component';

const routes: Routes = [
  {
    path: '', component: CateringComponent,
    children: [
      { path: '', component: CateringOrderComponent },
      { path: 'cateringorder', component: CateringOrderComponent },
      { path: 'addorder', component: NewOrderComponent },
      { path: 'menusetup', component: MenuSetupComponent},
      { path: 'addmenu', component: MenuFormComponent },
      { path: 'addmenu/:id', component: MenuFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule, FormsModule,
    ReactiveFormsModule, HttpModule, HttpClientModule,
    ButtonModule, InputTextModule, CalendarModule,
    PasswordModule, PanelModule, TabViewModule, DataGridModule,
    GrowlModule, MessageModule, FieldsetModule, TreeTableModule,
    MessagesModule, DataTableModule, DropdownModule, BlockUIModule
  ],
  declarations: [CateringComponent, MenuSetupComponent, MenuFormComponent, CateringOrderComponent, NewOrderComponent],
  providers: [AppUtils, CateringService, InventoryService]
})
export class CateringModule { }
