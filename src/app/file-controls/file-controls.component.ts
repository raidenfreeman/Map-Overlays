import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MatSliderChange } from "@angular/material";
import { MapService, AppOverlay } from "../services/map.service";
import { LatLngBounds } from "leaflet";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DeletionConfirmationDialogComponent } from "../deletion-confrimation-dialog/deletion-confrimation-dialog.component";
import * as L from "leaflet";

export interface DialogData {
  fileName: string;
}

@Component({
  selector: "app-file-controls",
  templateUrl: "./file-controls.component.html",
  styleUrls: ["./file-controls.component.css"]
})
export class FileControlsComponent implements OnInit {
  @Input() file: AppOverlay;

  // private coordinates: { lat: number; lng: number };

  public opacityValue: number;

  constructor(private srv: MapService, public dialog: MatDialog) {
    // this.coordinates = { lat: 0, lng: 0 };
  }

  isThrottling: boolean;
  handleCoordinate() {
    if (this.isThrottling) {
      return;
    } else {
      this.isThrottling = true;
      setTimeout(() => {
        this.isThrottling = false;
        const bottomRight = L.latLng(
          this.bounds.bottomRight.y,
          this.bounds.bottomRight.x
        );
        const topLeft = L.latLng(this.bounds.topLeft.y, this.bounds.topLeft.x);
        const newBounds = L.latLngBounds(bottomRight, topLeft);
        this.file.setBounds(newBounds);
      }, 100);
    }
    // this.bounds;
    // this.file.setBounds()
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
      return "100%";
    }
    return `${100 - value}%`;
  }

  locate() {
    this.srv.setBounds(this.file.getBounds());
  }

  delete() {
    const dialogRef = this.dialog.open(DeletionConfirmationDialogComponent, {
      width: "50%",
      data: { fileName: this.file.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.srv.removeImageOverlay(this.file);
      }
    });
  }
  bounds: {
    topLeft: { x: number; y: number };
    bottomRight: { x: number; y: number };
  };
  ngOnInit() {
    const fileBounds = this.file.getBounds();
    this.bounds = {
      topLeft: {
        x: fileBounds.getWest(),
        y: fileBounds.getNorth()
      },
      bottomRight: {
        x: fileBounds.getEast(),
        y: fileBounds.getSouth()
      }
    };
    // console.log(this.file.opacity);
  }
}
