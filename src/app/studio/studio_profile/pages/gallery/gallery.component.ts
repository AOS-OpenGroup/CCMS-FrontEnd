import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studio } from 'src/app/bookings/model/studio';
import { StudioProfileService } from '../../services/studio-profile.service';

export interface Tile {
  color: string;
  url: string;
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  studio!: Studio;
  constructor(private route: ActivatedRoute, private studiosService: StudioProfileService) { }
  tiles: Tile[] = [
    {cols: 3, rows: 1, url: 'https://i.pinimg.com/originals/37/db/8c/37db8c2683d79b42e949fbc17c2f1459.jpg',color: 'lightblue'},
    {cols: 1, rows: 2, url: 'https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',color: 'lightgreen'},
    {cols: 1, rows: 1, url: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',color: 'lightpink'},
    {cols: 2, rows: 1, url: 'https://images.pexels.com/photos/7586659/pexels-photo-7586659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',color: '#DDBDF1'},
  ];

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
