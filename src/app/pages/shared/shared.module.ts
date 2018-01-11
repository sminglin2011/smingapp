import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, CollapseModule, PopoverModule } from 'ngx-bootstrap';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [
    PagetemplateComponent,
    SidebarComponent,
    MenuitemComponent,
    TablelistComponent,
    DeshboadComponent,
    DemoPipe, Demo2Pipe, ButtongroupComponent, Dc1Component, Dc2Component, DynamicComponent
  ],
  exports: [
    PagetemplateComponent,
    TablelistComponent,
    DeshboadComponent, Dc1Component, Dc2Component
  ],
  entryComponents: [
    Dc1Component, Dc2Component
  ],
  providers: [ WindowRef ]
})
export class SharedModule { }
