import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Studio } from 'src/app/bookings/model/studio';
import { StudioProfileService } from '../../services/studio-profile.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings-studio-profile.component.html',
  styleUrls: ['./bookings-studio-profile.component.css']
})
export class BookingsStudioProfileComponent implements OnInit {
  studio!: Studio;
  minDate: Date;
  maxDate: Date;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  
  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService, public dialog: MatDialog) { 
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    this.minDate = new Date(currentYear - 20, currentMonth, currentDay -1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
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
  minDate: Date;
  maxDate: Date;
  constructor(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    this.minDate = new Date(currentYear, currentMonth, 20+currentDay);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  sayHi() {
    alert("Hi y'all")
  }
}
