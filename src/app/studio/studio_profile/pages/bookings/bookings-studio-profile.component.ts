import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings-studio-profile.component.html',
  styleUrls: ['./bookings-studio-profile.component.css']
})
export class BookingsStudioProfileComponent implements OnInit {

  constructor() { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }

}
