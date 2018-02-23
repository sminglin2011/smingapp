import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule, PopoverModule } from 'ngx-bootstrap';
import { PagetemplateComponent } from './pagetemplate/pagetemplate.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { MenuitemComponent } from '../../layout/sidebar/menuitem/menuitem.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { DeshboadComponent } from './deshboad/deshboad.component';
import { DemoPipe } from './pipe/demopipe.pipe';
import { Demo2Pipe } from './pipe/demo2pipe.pipe';
import { ButtongroupComponent } from './buttongroup/buttongroup.component';
import { WindowRef } from './winref/windowRef.service';
import { Dc1Component } from './dc1/dc1.component';
import { Dc2Component } from './dc2/dc2.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DialogComponent } from './dialog/dialog.component';
import { ButtonModule, InputTextModule, CalendarModule, OverlayPanelModule,
  PasswordModule, PanelModule, SidebarModule, AccordionModule,
  GrowlModule, MessageModule, PanelMenuModule,
  MessagesModule, DataTableModule, FieldsetModule } from 'primeng/primeng';
import { ModulepageComponent } from './modulepage/modulepage.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateinputComponent } from './dateinput/dateinput.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { AddressComponent } from './components/address/address.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, CalendarModule, OverlayPanelModule,
    PasswordModule, PanelModule, SidebarModule, AccordionModule,
    GrowlModule, MessageModule, PanelMenuModule,
    MessagesModule, DataTableModule, FieldsetModule
  ],
  declarations: [
    PagetemplateComponent,
    SidebarComponent,
    MenuitemComponent,
    TablelistComponent,
    DeshboadComponent,
    DemoPipe, Demo2Pipe, ButtongroupComponent, Dc1Component,
    Dc2Component, DynamicComponent, DialogComponent, ModulepageComponent,
    SidemenuComponent,
    SidenavComponent,
    DynamicFormComponent,
    DateinputComponent,
    AddressComponent,
    CustomerFormComponent
  ],
  exports: [
    PagetemplateComponent,
    TablelistComponent,
    DeshboadComponent, Dc1Component, Dc2Component, DialogComponent,
    ModulepageComponent, SidenavComponent, DynamicFormComponent, DateinputComponent,
    CustomerFormComponent
  ],
  entryComponents: [
    Dc1Component, Dc2Component, DialogComponent
  ],
  providers: [ WindowRef ]
})
export class SharedModule { }
