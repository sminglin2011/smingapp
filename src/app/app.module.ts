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
import { InputTextModule, ButtonModule, GrowlModule, PanelModule } from 'primeng/primeng';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthGuardService } from './service/authGuard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'loginpage', component: LoginpageComponent},
  { path: '', redirectTo: 'pages', pathMatch: 'full'},
  { path: 'pages', component: PagesComponent, children: [
    { path: 'account', loadChildren: './pages/account/account.module#AccountModule'},
    { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
    { path: 'tingkat', loadChildren: './pages/tingkat/tingkat.module#TingkatModule' }
  ]} // , canActivate: [AuthGuardService]
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent, PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(routes),
    PopoverModule.forRoot(),
    InputTextModule, ButtonModule, GrowlModule, PanelModule
  ],
  providers: [
    AppService,
    HttpModule,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
