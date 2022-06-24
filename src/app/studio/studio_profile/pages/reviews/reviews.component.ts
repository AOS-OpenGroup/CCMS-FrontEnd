
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
  studioId!: number;
  reviewsData: Review[];
  val1: number;

  isEditMode = false;

  constructor(private reviewsService: ReviewsService) {
    //this.studioId = localStorage.getItem('studioId');
    this.studioId = 1;
    this.reviewsData = [];
    this.val1 = 4;
  }

  ngOnInit(): void {
    this.getReviewsByStudioId(this.studioId);
  }

  getReviewsByStudioId(studioId: number){
    this.reviewsService.getByStudioId(studioId).subscribe((response: any) => {
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
