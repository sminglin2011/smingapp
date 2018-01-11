import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './narbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuitemComponent } from './sidebar/menuitem/menuitem.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MenuitemComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MenuitemComponent
  ],
  entryComponents: [
  ]
})
export class LayoutModule { }
