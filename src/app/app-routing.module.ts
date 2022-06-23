import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingComponent} from "./bookings/pages/booking/booking.component";
import {EquipmentComponent} from "./studio/studio_profile/pages/equipment/equipment.component";
import {GalleryComponent} from "./studio/studio_profile/pages/gallery/gallery.component";
import {ReviewsComponent} from "./studio/studio_profile/pages/reviews/reviews.component";
import {ProfileComponent} from "./users/pages/profile/profile.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {OverviewComponent} from "./studio/studio_profile/pages/overview/overview.component";
import {BookingsComponent} from "./bookings/pages/bookings/bookings.component";
import {StudiosComponent} from "./bookings/pages/near-you/near-you.component";
import {MainComponent} from "./bookings/pages/main/main.component";
import {BookingsStudioProfileComponent } from './studio/studio_profile/pages/bookings/bookings-studio-profile.component';
import {UpcomingComponent } from './studio/studio-profile-admin/pages/home/home.component';
import{BookingListComponent} from "./studio/studio-profile-admin/pages/booking-list/booking-list.component";
import {BookTheStudioComponent} from "./studio/studio_profile/pages/book-the-studio/book-the-studio.component";

const routes: Routes = [
  {path: 'studio-profile/bookings', component: BookingsStudioProfileComponent},
  {path: 'studio-profile/equipment', component: EquipmentComponent},
  {path: 'studio-profile/gallery', component: GalleryComponent},
  {path: 'studio-profile/reviews', component: ReviewsComponent},
  {path: '', redirectTo: 'sign-up' , pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'studio-profile/overview', component: OverviewComponent},
  {path: 'home', component: MainComponent},
  {path: 'bookings/booking', component: BookingComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'home/near-you', component: StudiosComponent},
  {path:'admin/home', component: UpcomingComponent},
  {path: 'admin/home/bookings',component:BookingListComponent},
  {path: 'studio-profile/book-the-studio',component:BookTheStudioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
