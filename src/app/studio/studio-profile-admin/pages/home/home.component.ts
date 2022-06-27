import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Booking} from "../../model/booking";
import {BookingListService} from "../../services/booking-list.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


import * as _ from "lodash";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UpcomingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  bookingData: Booking;
  displayedColumns: string[] = ['id', 'customer', 'date', 'time', 'status']

  @ViewChild('studentForm', {static: false})
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
    this.getAllGuardians();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllGuardians() {
    this.guardiansService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  selectGuardian(element: Booking){
    //console.log(element);
    this.guardiansService.SetCurrent.emit({
      data:element
    })
  }
  editItem(element: Booking) {
    this.bookingData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.guardianForm.resetForm();
  }


  onSubmit() {
    if (this.guardianForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
      } else {
        console.log('about to create');
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}


