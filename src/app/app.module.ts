import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { StudioProfileComponent } from './studio_profile/pages/studio-profile/studio-profile.component';
import { GalleryComponent } from './studio_profile/pages/gallery/gallery.component';
import { ReviewsComponent } from './studio_profile/pages/reviews/reviews.component';
import { BookingComponent } from './studio_profile/pages/booking/booking.component';
import { EquipmentComponent } from './studio_profile/pages/equipment/equipment.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from "@angular/material/menu";
import { OverviewComponent } from './studio_profile/pages/overview/overview.component';
import { HomeComponent } from './home/pages/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/pages/bookings/bookings.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    StudioProfileComponent,
    GalleryComponent,
    ReviewsComponent,
    BookingComponent,
    EquipmentComponent,
    MenuComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    OverviewComponent,
    HomeComponent,
    BookingsComponent,
    SignUpAdminComponent,
    SettingsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatSliderModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
      MatGridListModule,
      MatCardModule,
      MatInputModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
