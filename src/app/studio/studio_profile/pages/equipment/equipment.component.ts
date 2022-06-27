import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studio } from 'src/app/bookings/model/studio';
import { StudioProfileService } from '../../services/studio-profile.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

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
