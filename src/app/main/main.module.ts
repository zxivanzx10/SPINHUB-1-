import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ADMIN MAIN COMPONENTS
import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
