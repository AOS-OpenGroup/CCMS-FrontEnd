import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  status: string;
  position: number;
  date: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, status: 'Reserved', date: '14/06/2022'},
  {position: 2, status: 'Available', date: '28/08/2022'},
  {position: 3, status: 'Available', date: '01/09/2022'},
  {position: 4, status: 'Reserved', date: '15/09/2022'},
  {position: 5, status: 'Reserved', date: '22/10/2022'},
  {position: 6, status: 'Available', date: '25/10/2022'},
  {position: 7, status: 'Reserved', date: '07/12/2022'}
];

@Component({
  selector: 'app-book-the-studio',
  templateUrl: './book-the-studio.component.html',
  styleUrls: ['./book-the-studio.component.css']
})


export class BookTheStudioComponent implements OnInit {

  selected: Date = new Date(2022,1,1);
  displayedColumns: string[] = ['position', 'status', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}















