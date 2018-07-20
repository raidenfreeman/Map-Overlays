import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private strg: MapService) {}

  @ViewChild('map', { read: ElementRef })
  map: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      this.strg.setupMap(this.map);
    }, 0);
  }
}
