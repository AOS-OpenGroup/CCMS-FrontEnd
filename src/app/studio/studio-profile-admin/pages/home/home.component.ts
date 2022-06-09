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
  {id: 10, customer: 'Neon Shyny', date: '7 jun ,2022', time: '18:00',status:true}
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UpcomingComponent  {
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

  @ViewChild('upcomingForm', {static: false})
  upcomingForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private upcomingService: UpcomingService) {
    this.upcomingData[10] = {} as Upcoming;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllUpComing();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllUpComing() {
    this.upcomingService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  editItem(element: Upcoming) {
    this.upcomingData[10] = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.upcomingForm.resetForm();
  }

  deleteItem(id: number) {
    this.upcomingService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Upcoming) => {
        return o.id !== id ? o : false;
      });
    });

    console.log(this.dataSource.data);
  }
  selectUpcoming(element: Review){
    //console.log(element);
    this.upcomingService.SetCurrent.emit({
      data:element
    })
  }

  addUpcoming() {
    this.upcomingData[10].id = 0;
    this.upcomingService.create(this.upcomingData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateUpcoming() {
    this.upcomingService.update(this.upcomingData[10].id, this.upcomingData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Upcoming) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }
  onSubmit() {
    if (this.upcomingForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateUpcoming();
      } else {
        console.log('about to create');
        this.addUpcoming();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}*/
