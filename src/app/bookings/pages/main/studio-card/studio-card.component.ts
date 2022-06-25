import {Component, Input, OnInit} from '@angular/core';
import { Studio } from 'src/app/bookings/model/studio';


@Component({
  selector: 'app-studio-card',
  templateUrl: './studio-card.component.html',
  styleUrls: ['./studio-card.component.css']
})
export class StudioCardComponent implements OnInit {
  @Input() studio!: Studio;
  moreInformationUrl!: string;

  constructor() { }

  ngOnInit(): void {
    // this.moreInformationUrl = `/client/search/car/${this.studio.id}`;
  }
}