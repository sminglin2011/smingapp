import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppUtils } from '../../tools/app.utils';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule, InputTextModule, CalendarModule,
  PasswordModule, PanelModule,
  GrowlModule, MessageModule,
  MessagesModule, DataTableModule, FieldsetModule, DragDropModule } from 'primeng/primeng';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { DriverComponent } from './driver/driver.component';
import { DriverFormComponent } from './driver-form/driver-form.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent,
    children: [
      { path: '', component: ContactDashboardComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'addCustomer', component: NewCustomerComponent },
      { path: 'driver', component: DriverComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule, FormsModule,
    ReactiveFormsModule, HttpModule, HttpClientModule,
    ButtonModule, InputTextModule, CalendarModule,
    PasswordModule, PanelModule,
    GrowlModule, MessageModule, FieldsetModule,
    MessagesModule, DataTableModule, DragDropModule
  ],
  declarations: [ContactDashboardComponent, CustomerComponent,
    ContactComponent, NewCustomerComponent, DriverComponent,
    DriverFormComponent],
  providers: [ AppUtils, ContactService ],
  exports: [ ]
})
export class ContactModule { }
