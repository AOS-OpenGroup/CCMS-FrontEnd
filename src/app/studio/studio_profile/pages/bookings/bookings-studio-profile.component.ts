import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Studio } from 'src/app/bookings/model/studio';
import { StudioProfileService } from '../../services/studio-profile.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings-studio-profile.component.html',
  styleUrls: ['./bookings-studio-profile.component.css']
})
export class BookingsStudioProfileComponent implements OnInit {
  studio!: Studio;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  
  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const studioId = Number(routeParams.get('studioId'));

    this.getStudio(studioId);
  }
  getStudio(studioId: number) : void{
    this.studiosService.getById(studioId).subscribe((response: any) => {
      this.studio = response;
    });
  }

}
