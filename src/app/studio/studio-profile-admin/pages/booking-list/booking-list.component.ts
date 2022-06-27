import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Booking} from "../../model/booking";
import {BookingListService} from "../../services/booking-list.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {


  dataSource: MatTableDataSource<any>;
  bookingData: Booking;
  //displayedColumns: string[] = ['id', 'studioId', 'customer','date', 'time', 'status'];


  @ViewChild('bookingForm', {static: false})
  guardianForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

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
      columnDef: 'customer',
      header: 'Customer',
      cell: (element: Booking) => `${element.musicianId}`,
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





