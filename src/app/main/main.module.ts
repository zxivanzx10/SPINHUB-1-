import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ADMIN MAIN COMPONENTS
import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { SummaryComponent } from './components/dashboard/Components/summary/summary.component';
import { AppointmentsComponent } from './components/dashboard/Components/appointments/appointments.component';
import { CustomersComponent } from './components/dashboard/Components/customers/customers.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    EventsComponent,
    SummaryComponent,
    AppointmentsComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
