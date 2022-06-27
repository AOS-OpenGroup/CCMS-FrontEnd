import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort/public-api';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/studio/studio-profile-admin/model/booking';
import { BookingListService } from 'src/app/studio/studio-profile-admin/services/booking-list.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {


  dataSource: MatTableDataSource<any>;
  bookingData: Booking;
  //displayedColumns: string[] = ['id', 'studioId', 'customer','date', 'time', 'status'];


  @ViewChild('bookingForm', {static: false})
  guardianForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;


  isEditMode = false;

  constructor(private guardiansService: BookingListService) {
    this.bookingData = {} as Booking;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    this.getAllBookings();
  }
  getAllBookings() {
    this.guardiansService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  columns = [

    {
      columnDef: 'studio',
      header: 'Studio',
      cell: (element: Booking) => `${element.studioId}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Booking) => `${element.date}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: Booking) => `${element.time}`,
    },

  ];
  displayedColumns = this.columns.map(c => c.columnDef);

}
