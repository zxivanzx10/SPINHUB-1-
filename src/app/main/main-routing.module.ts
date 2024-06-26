import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'Events', component: EventsComponent},
  { path: 'Booking', component: BookingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
