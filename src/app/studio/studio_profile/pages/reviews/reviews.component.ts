
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
  musicianId!: number;
  guardianData: Review;
  reviewsData: Review[];
  val1: number;
  displayedColumns: string[] = ['id', 'username', 'date', 'message', 'actions']

  @ViewChild('studentForm', {static: false})
  guardianForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private guardiansService: ReviewsService) {
    this.musicianId = 1;
    this.guardianData = {} as Review;
    this.reviewsData = [];
    this.val1 = 4;
  }

  ngOnInit(): void {
    this.getReviewsByMusicianId(this.musicianId);
  }

  ngAfterViewInit(): void {

  }

  getReviewsByMusicianId(musicianId: number){
    this.guardiansService.getByMusicianId(musicianId).subscribe((response: any) => {
      this.reviewsData = response;
    });
  }



  // addGuardian() {
  //   this.guardianData.id = 0;
  //   this.guardiansService.create(this.guardianData).subscribe((response: any) => {
  //     this.dataSource.data.push({...response});
  //     this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
  //   });
  // }

  // onSubmit() {
  //   if (this.guardianForm.form.valid) {
  //     console.log('valid');
  //     if (this.isEditMode) {
  //       console.log('about to update');
  //       this.updateGuardian();
  //     } else {
  //       console.log('about to create');
  //       this.addGuardian();
  //     }
  //     this.cancelEdit();
  //   } else {
  //     console.log('Invalid data');
  //   }
  // }

}
