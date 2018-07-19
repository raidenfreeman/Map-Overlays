import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatSliderChange } from "../../../node_modules/@angular/material";

declare interface LatLng {
  lat: number;
  lng: number;
}

@Component({
  selector: "app-file-controls",
  templateUrl: "./file-controls.component.html",
  styleUrls: ["./file-controls.component.css"]
})
export class FileControlsComponent implements OnInit {
  @Output() delete = new EventEmitter();
  @Output() locate = new EventEmitter();

  @Output() coordinatesChanged = new EventEmitter<LatLng>();
  @Output() opacityChanged = new EventEmitter<number>();

  constructor() {
    this.coordinates = { lat: 0, lng: 0 };
  }

  private coordinates: LatLng;
  handleCoordinate(coordinateId: number) {
    coordinateId
      ? (this.coordinates.lat = coordinateId)
      : (this.coordinates.lng = coordinateId);

    this.coordinatesChanged.emit(this.coordinates);
  }

  handleOpacity(change: MatSliderChange) {
    this.opacityChanged.emit(100-change.value);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return '100%';
    }
    return `${100-value}%`;
  }
  ngOnInit() {}
}
