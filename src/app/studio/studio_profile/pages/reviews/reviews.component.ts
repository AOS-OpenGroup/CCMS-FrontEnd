
import {AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews.service';
import * as _ from "lodash";
import { Musician } from 'src/app/musicians/model/musician';
import { MusicianService } from 'src/app/musicians/services/musician.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  studioId!: number;
  reviewsData: Review[];
  musicianData: Musician
  val1: number;

  isEditMode = false;

  constructor(private reviewsService: ReviewsService, private musiciansService: MusicianService) {
    //this.musicianId = localStorage.getItem('musicianId');
    //studioId is got as a router params
    this.studioId = 2;
    this.reviewsData = [];
    this.musicianData = {} as Musician;
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

  getNamebyMusicianId(musicianId: number) : string{
    this.musiciansService.getByMusicianId(musicianId).subscribe((response: any) => {
      this.musicianData = response;
    });
    return this.musicianData.name;
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
