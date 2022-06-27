import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Studio} from "../../../../bookings/model/studio";
import {StudioProfileService} from "../../services/studio-profile.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  studio!: Studio;

  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService) { }


  ngOnInit(): void {
    // First get the product id from the current route.
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
