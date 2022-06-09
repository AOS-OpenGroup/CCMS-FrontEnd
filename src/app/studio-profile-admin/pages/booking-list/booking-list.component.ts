import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Upcoming} from "../../model/upcoming";
import {UpcomingService} from "../../services/upcoming.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import * as _ from "lodash";
import {Review} from "../../../studio_profile/model/review";
const ELEMENT_DATA:Upcoming[]=[
  {id: 1, customer: 'Mateo lewis', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 2, customer: ' helion rofue', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 3, customer: 'Lithium bardo', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 4, customer: 'Beryllium Vasques', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 5, customer: 'Boron Rojo', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 6, customer: 'Carbon Shen', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 7, customer: 'Nitrogen Clos', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 8, customer: 'Oxygen Pard', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 9, customer: 'Fluorine Parck', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 10, customer: 'Neon Shyny', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 5, customer: 'Boron Rojo', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 6, customer: 'Carbon Shen', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 7, customer: 'Nitrogen Clos', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 8, customer: 'Oxygen Pard', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 9, customer: 'Fluorine Parck', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 10, customer: 'Neon Shyny', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 5, customer: 'Boron Rojo', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 6, customer: 'Carbon Shen', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 7, customer: 'Nitrogen Clos', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 8, customer: 'Oxygen Pard', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 9, customer: 'Fluorine Parck', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 10, customer: 'Neon Shyny', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 5, customer: 'Boron Rojo', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 6, customer: 'Carbon Shen', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 7, customer: 'Nitrogen Clos', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 8, customer: 'Oxygen Pard', date: '7 jun ,2022', time: '18:00',status:true},
  {id: 9, customer: 'Fluorine Parck', date: '7 jun ,2022', time: '18:00',status:false},
  {id: 10, customer: 'Neon Shyny', date: '7 jun ,2022', time: '18:00',status:true}
];
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent  {
  //displayedColumns: string[] = ['id', 'customer', 'date', 'time', 'status'];
  columns = [

    {
      columnDef: 'Id',
      header: 'No.',
      cell: (element: Upcoming) => `${element.id}`,
    },
    {
      columnDef: 'customer',
      header: 'Customer',
      cell: (element: Upcoming) => `${element.customer}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Upcoming) => `${element.date}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: Upcoming) => `${element.time}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Upcoming) => `${element.status}`,
    }
  ];
  upcomingData = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
}


/*
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import{ BookingListModel} from "../../model/booking-list.model";
import {MatTableDataSource} from "@angular/material/table";
import{BookingListService} from "../../services/booking-list.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {Sort,MatSort} from "@angular/material/sort";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import * as _ from "lodash";
const ELEMENT_DATA: BookingListModel[]= [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //bookingData: BookingListModel;

  @ViewChild('studentForm', {static: false})
  guardianForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */

 /* constructor(private guardiansService: BookingListService) {
    this.bookingData = {} as BookingListModel;
    this.dataSource = new MatTableDataSource<any>();
  }


  ngOnInit(): void {
    this.getAllGuardians();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  getAllGuardians() {
    this.guardiansService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  selectGuardian(element: BookingListModel){
    //console.log(element);
    this.guardiansService.SetCurrent.emit({
      data:element
    })
  }
  editItem(element: BookingListModel) {
    this.bookingData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.guardianForm.resetForm();
  }

  deleteItem(id: number) {
    this.guardiansService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: BookingListModel) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addGuardian() {
    this.bookingData.id = 0;
    this.guardiansService.create(this.bookingData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateGuardian() {
    this.guardiansService.update(this.bookingData.id, this.bookingData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: BookingListModel) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }
  onSubmit() {
    if (this.guardianForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateGuardian();
      } else {
        console.log('about to create');
        this.addGuardian();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }*/

  /** Announce the change in sort state for assistive technology. */



