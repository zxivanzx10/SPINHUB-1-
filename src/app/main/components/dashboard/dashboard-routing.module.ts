import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummaryComponent } from "./Components/summary/summary.component";
import { AppointmentsComponent } from "./Components/appointments/appointments.component";
import { CustomersComponent } from "./Components/customers/customers.component";

const routes: Routes = [
    { path: '', redirectTo: 'materialscontent', pathMatch: 'full' },
    { path: 'Summary', component: SummaryComponent},
    { path: 'Appoinment', component: AppointmentsComponent},
    { path: 'Customer', component: CustomersComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardComponent { }
  