import { Component, OnInit } from '@angular/core';
import { StudioProfileService } from 'src/app/studio/studio_profile/services/studio-profile.service';
import { Studio } from '../../model/studio';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  studiosData: Studio [];

  constructor(private studiosService: StudioProfileService) {
    this.studiosData = [];
   }

  ngOnInit(): void {
    this.getStudios();
  }

  getStudios() : void{
    this.studiosService.getAll().subscribe((response: any) => {
      this.studiosData = response;
    });
  }
}
