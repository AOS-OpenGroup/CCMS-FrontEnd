import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudioProfileComponent} from "./studio_profile/pages/studio-profile/studio-profile.component";
import {BookingComponent} from "./studio_profile/pages/booking/booking.component";
import {EquipmentComponent} from "./studio_profile/pages/equipment/equipment.component";
import {GalleryComponent} from "./studio_profile/pages/gallery/gallery.component";
import {ReviewsComponent} from "./studio_profile/pages/reviews/reviews.component";
import {ProfileComponent} from "./profile/profile.component";
import {MenuComponent} from "./menu/menu.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import { BookingsComponent } from './artist/pages/bookings/bookings.component';

const routes: Routes = [
  {path: 'studio-profile/booking', component: BookingComponent},
  {path: 'studio-profile/equipment', component: EquipmentComponent},
  {path: 'studio-profile/gallery', component: GalleryComponent},
  {path: 'studio-profile/reviews', component: ReviewsComponent},
  {path: 'studio-profile', component: StudioProfileComponent},
  {path: '', redirectTo: 'sign-in' , pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'my-bookings', component: BookingsComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
