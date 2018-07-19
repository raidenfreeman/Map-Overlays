import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import * as L from "leaflet";
import { ImageStorageService } from "./image-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(private strg: ImageStorageService){

  }
  @ViewChild("map", { read: ElementRef })
  map: ElementRef;

  private myMap;
  ngOnInit() {
    setTimeout(() => {

      this.myMap = L.map(this.map.nativeElement).setView([51.505, -0.09], 13);
      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken:
          "pk.eyJ1IjoicmFpZGVuZnJlZW1hbiIsImEiOiJjaWZkcXZ1eTgwMGQ4dG5seWF2dzliZmhpIn0.BqZRSI9qyOANkq11vk0pGw"
        }
      ).addTo(this.myMap);
      this.strg.setup(this.myMap);
    }, 0);
  }

  go(){
    this.strg.getImage().subscribe(x=>{
      debugger
      // L.imageOverlay(URL.createObjectURL(x.target.result) , imageBounds).addTo(map);
    })
  }
}
