import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { MapService, AppOverlay } from '../services/image-storage.service';

@Component({
  selector: 'app-file-controls',
  templateUrl: './file-controls.component.html',
  styleUrls: ['./file-controls.component.css']
})
export class FileControlsComponent implements OnInit {
  @Input() file: AppOverlay;

  // private coordinates: { lat: number; lng: number };

  public opacityValue: number;

  constructor(private srv: MapService) {
    // this.coordinates = { lat: 0, lng: 0 };
  }

  handleCoordinate(coordinateId: number) {
    // coordinateId
    //   ? (this.coordinates.lat = coordinateId)
    //   : (this.coordinates.lng = coordinateId);
    // this.coordinatesChanged.emit(this.coordinates);
  }

  handleOpacity(change: MatSliderChange) {

    this.file.setOpacity((100 - change.value) * 0.01);
    // this.file.setOpacity(change.value);
    // this.opacityChanged.emit(100 - change.value);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return '100%';
    }
    return `${100 - value}%`;
  }

  ngOnInit() {
    // console.log(this.file.opacity);
  }
}
