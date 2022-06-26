import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { StudioProfileComponent } from './studio/studio_profile/pages/studio-profile/studio-profile.component';
import { GalleryComponent } from './studio/studio_profile/pages/gallery/gallery.component';
import { ReviewsComponent } from './studio/studio_profile/pages/reviews/reviews.component';
import { BookingComponent } from './bookings/pages/booking/booking.component';
import { EquipmentComponent } from './studio/studio_profile/pages/equipment/equipment.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MenuComponent } from './common/pages/menu/menu.component';
import { ProfileComponent } from './users/pages/profile/profile.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './common/pages/footer/footer.component';
import {MatMenuModule} from "@angular/material/menu";
import { OverviewComponent } from './studio/studio_profile/pages/overview/overview.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookingsComponent } from './bookings/pages/bookings/bookings.component';
import { StudiosComponent } from './bookings/pages/near-you/near-you.component';
import { MainComponent } from './bookings/pages/main/main.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import 'primeflex/primeflex.scss';
import { BookingsStudioProfileComponent, BookTheStudioDialog } from './studio/studio_profile/pages/bookings/bookings-studio-profile.component';
import {UpcomingComponent} from "./studio/studio-profile-admin/pages/home/home.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BookingListComponent } from './studio/studio-profile-admin/pages/booking-list/booking-list.component';
import { StudioCardComponent } from './bookings/pages/main/studio-card/studio-card.component';
import { BookTheStudioComponent } from './studio/studio_profile/pages/book-the-studio/book-the-studio.component'
//import { PaymentComponent } from './studio/studio_profile/pages/payment/payment.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule} from '@angular/material/dialog';


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
    BookingsComponent,
    StudiosComponent,
    MainComponent,
    BookingsStudioProfileComponent,
    UpcomingComponent,
    StudioCardComponent,
    BookingListComponent,
    BookTheStudioComponent,
  BookTheStudioDialog ],
  imports: [
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
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
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
