import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, CollapseModule } from 'ngx-bootstrap';
import { PagetemplateComponent } from './pagetemplate/pagetemplate.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { MenuitemComponent } from '../../layout/sidebar/menuitem/menuitem.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { DeshboadComponent } from './deshboad/deshboad.component';
import { DemoPipe } from './pipe/demopipe.pipe';
import { Demo2Pipe } from './pipe/demo2pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    PagetemplateComponent,
    SidebarComponent,
    MenuitemComponent,
    TablelistComponent,
    DeshboadComponent,
    DemoPipe, Demo2Pipe
  ],
  exports: [
    PagetemplateComponent,
    TablelistComponent,
    DeshboadComponent
  ],
  entryComponents: [

  ]
})
export class SharedModule { }
