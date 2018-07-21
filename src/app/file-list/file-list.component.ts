import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ReadFile, FilePickerDirective, ReadMode } from "ngx-file-helpers";
import { MapService, AppOverlay } from "../services/map.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AddFileDialogComponent } from "../add-file-dialog/add-file-dialog.component";
import { MatDialog } from "@angular/material";
import * as L from "leaflet";

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"]
})
export class FileListComponent implements OnInit {
  constructor(private str: MapService, public dialog: MatDialog) {}
  @ViewChild(FilePickerDirective) private filePicker;
  public status: string;
  public picked: ReadFile;
  public readMode = ReadMode.arrayBuffer;

  public addedOverlays: Observable<AppOverlay[]>;

  ngOnInit(): void {
    this.addedOverlays = this.str.overlays;
  }

  onFilePicked(file: ReadFile) {
    const dialogRef = this.dialog.open(AddFileDialogComponent, {
      width: "50%",
      data: { fileName: file.name, south: 0, east: 0, west: 0, north: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const bounds = L.latLngBounds(
          L.latLng(result.west, result.north),
          L.latLng(result.east, result.south)
        );
        this.str.addImageOverlayAtBounds(
          file.name,
          URL.createObjectURL(file.underlyingFile),
          bounds
        );
      }
    });
  }

  onReadEnd(fileCount: number) {
    // this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    // console.log(this.status);
    this.filePicker.reset();
  }
}
