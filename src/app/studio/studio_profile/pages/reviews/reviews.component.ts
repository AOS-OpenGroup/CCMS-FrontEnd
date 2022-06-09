
import {AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews.service';
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import * as _ from "lodash";
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  guardianData: Review;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'date', 'message', 'actions']

  @ViewChild('studentForm', {static: false})
  guardianForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private guardiansService: ReviewsService) {
    this.guardianData = {} as Review;
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
  selectGuardian(element: Review){
    //console.log(element);
    this.guardiansService.SetCurrent.emit({
      data:element
    })
  }
  editItem(element: Review) {
    this.guardianData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.guardianForm.resetForm();
  }

  deleteItem(id: number) {
    this.guardiansService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Review) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addGuardian() {
    this.guardianData.id = 0;
    this.guardiansService.create(this.guardianData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateGuardian() {
    this.guardiansService.update(this.guardianData.id, this.guardianData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Review) => {
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
  }

}
