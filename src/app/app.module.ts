import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './layout/narbar/navbar.component';
import { CollapseModule, AccordionModule, PopoverModule } from 'ngx-bootstrap';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { PagesComponent } from './pages/pages.component';
import { ButtonModule, OverlayPanelModule} from 'primeng/primeng';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(routes),
    PopoverModule.forRoot(),
    ButtonModule, OverlayPanelModule
  ],
  providers: [
    AppService,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
