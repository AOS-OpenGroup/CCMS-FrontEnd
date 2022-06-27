import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Studio } from 'src/app/bookings/model/studio';
import { Booking } from 'src/app/studio/studio-profile-admin/model/booking';
import { BookingListService } from 'src/app/studio/studio-profile-admin/services/booking-list.service';
import { StudioProfileService } from '../../services/studio-profile.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings-studio-profile.component.html',
  styleUrls: ['./bookings-studio-profile.component.css']
})
export class BookingsStudioProfileComponent implements OnInit {
  studio!: Studio;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]); 
  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService, public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const studioId = Number(routeParams.get('studioId'));

    this.getStudio(studioId);
  }
  openDialog() {
    const dialogRef = this.dialog.open(BookTheStudioDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getStudio(studioId: number) : void{
    this.studiosService.getById(studioId).subscribe((response: any) => {
      this.studio = response;
    });
  }
}
@Component({
  selector: 'book-the-studio-dialog',
  templateUrl: 'book-the-studio-dialog.html',
})
export class BookTheStudioDialog {
  time: string;

  studioId: number;
  musicianId: number;
  booking!: Booking;
  minDate: Date;
  example!: Date;
  maxDate: Date;
  constructor(private route :Router, private bookingsService: BookingListService){
    this.time="";
    this.studioId=1;
    this.musicianId=2;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    this.minDate = new Date(currentYear, currentMonth, 20+currentDay);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  getSelectedDropdown(time: any) {
    this.time = time;  
}
getDateFormat(date: Date): string {
  if (date === null) return "";

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

  onSubmit() {
    this.booking={
      date: this.getDateFormat(this.example),
      time:this.time,
      studioId: this.studioId,
      musicianId: this.musicianId
    }
    this.bookingsService.create(this.booking).subscribe((response: any) =>{
      console.log(response);
    })
    this.route.navigate(['/studio-profile/book-the-studio/payment']); 
  }
}
