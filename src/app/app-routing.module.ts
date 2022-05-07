import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingAdminComponent} from "./studio_profile-admin/pages/booking-admin/booking-admin.component";
const routes: Routes = [
  {path:'BookingAdminComponent', component:BookingAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
