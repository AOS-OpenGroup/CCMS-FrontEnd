
import {AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews.service';
import * as _ from "lodash";
import { Musician } from 'src/app/musicians/model/musician';
import { MusicianService } from 'src/app/musicians/services/musician.service';
import { shareReplay } from 'rxjs';
import { Studio } from 'src/app/bookings/model/studio';
import { ActivatedRoute } from '@angular/router';
import { StudioProfileService } from '../../services/studio-profile.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviewsData: Review[];
  musiciansData: Musician [];
  val1: number;
  studio!: Studio;

  isEditMode = false;

  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService, private reviewsService: ReviewsService, private musiciansService: MusicianService) {
    //this.musicianId = localStorage.getItem('musicianId');
    //studioId is got as a router params
    this.reviewsData = [];
    this.musiciansData = [];
    this.val1 = 4;
  }

  ngOnInit(): void {
        // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const studioId = Number(routeParams.get('studioId'));
    this.getStudio(studioId);
    this.getReviewsByStudioId(studioId);
  }
  getStudio(studioId: number) : void{
    this.studiosService.getById(studioId).subscribe((response: any) => {
      this.studio = response;
    });
  }

  getReviewsByStudioId(studioId: number){
    this.reviewsService.getByStudioId(studioId).subscribe((response: any) => {
      this.reviewsData = response;
    });
  }

   getName(id: number) :any{
     this.getNamebyMusicianId(id);
     console.log(this.musiciansData)
     return this.musiciansData;
   }

  getNamebyMusicianId(musicianId: number){
    this.musiciansService.getById(musicianId).subscribe((response: any) => {
      this.musiciansData = response;
      return;
    });
  }
}
