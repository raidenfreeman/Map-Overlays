import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MatSliderChange } from "@angular/material";
import { MapService, AppOverlay } from "../services/image-storage.service";
import { LatLngBounds } from "../../../node_modules/@types/leaflet";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DeletionConfirmationDialogComponent } from "../deletion-confrimation-dialog/deletion-confrimation-dialog.component";

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
      return "100%";
    }
    return `${100 - value}%`;
  }

  locate() {
    this.srv.setBounds(this.file.getBounds());
  }

  delete() {
    const dialogRef = this.dialog.open(DeletionConfirmationDialogComponent, {
      width: "250px",
      data: { fileName: this.file.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.srv.removeImageOverlay(this.file);
      }
    });
  }
  bounds: LatLngBounds;
  ngOnInit() {
    this.bounds = this.file.getBounds();
    // console.log(this.file.opacity);
  }
}
