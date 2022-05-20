import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudioProfileComponent} from "./studio_profile/pages/studio-profile/studio-profile.component";
import {BookingComponent} from "./studio_profile/pages/booking/booking.component";
import {EquipmentComponent} from "./studio_profile/pages/equipment/equipment.component";
import {GalleryComponent} from "./studio_profile/pages/gallery/gallery.component";
import {ReviewsComponent} from "./studio_profile/pages/reviews/reviews.component";
import {ProfileComponent} from "./profile/profile.component";
import {MenuComponent} from "./menu/menu.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {OverviewComponent} from "./studio_profile/pages/overview/overview.component";
import {HomeComponent} from "./home/pages/home/home.component";
import {SignUpAdminComponent} from "./sign-up-admin/sign-up-admin.component";
import {BookingsComponent} from "./bookings/pages/bookings/bookings.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path: 'studio-profile/bookings', component: BookingComponent},
  {path: 'studio-profile/equipment', component: EquipmentComponent},
  {path: 'studio-profile/gallery', component: GalleryComponent},
  {path: 'studio-profile/reviews', component: ReviewsComponent},
  {path: 'studio-profile', component: StudioProfileComponent},
  {path: '', redirectTo: 'sign-in' , pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'studio-profile/overview', component: OverviewComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up-admin', component: SignUpAdminComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'settings', component: SettingsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
