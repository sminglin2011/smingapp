import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryTingkatComponent } from './query-tingkat/query-tingkat.component';
import { TingkatComponent } from './tingkat.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule, InputMaskModule, InputTextModule, AutoCompleteModule,
PanelModule, FieldsetModule, CheckboxModule, InputSwitchModule, ListboxModule,
CalendarModule, DropdownModule } from 'primeng/primeng';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';
import { TingkatService } from './tingkat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTingkatComponent } from './add-tingkat/add-tingkat.component';
import { TingkatCycleComponent } from './tingkat-cycle/tingkat-cycle.component';
import { AppUtils } from '../../tools/app.utils';
// import { ContactModule } from '../contact/contact.module';


const routes: Routes = [
  { path: '', component: TingkatComponent, children: [
    { path: '', component: QueryTingkatComponent },
    { path: 'query', component: QueryTingkatComponent },
    { path: 'add', component: AddTingkatComponent }
  ]}
];
@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes),
    SharedModule, HttpModule,
    ButtonModule, InputMaskModule, InputTextModule, AutoCompleteModule,
    PanelModule, FieldsetModule, CheckboxModule, InputSwitchModule, ListboxModule,
    CalendarModule, DropdownModule
  ],
  declarations: [QueryTingkatComponent, TingkatComponent, AddTingkatComponent, TingkatCycleComponent],
  providers: [ TingkatService, AppUtils ]
})
export class TingkatModule { }
