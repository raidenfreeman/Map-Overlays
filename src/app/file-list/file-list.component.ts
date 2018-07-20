import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ReadFile, FilePickerDirective, ReadMode } from "ngx-file-helpers";
import { MapService, AppOverlay } from "../services/map.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"]
})
export class FileListComponent implements OnInit {
  constructor(private str: MapService) {}
  @ViewChild(FilePickerDirective) private filePicker;
  public status: string;
  public picked: ReadFile;
  public readMode = ReadMode.arrayBuffer;

  public addedOverlays: Observable<AppOverlay[]>;

  ngOnInit(): void {
    this.addedOverlays = this.str.overlays;
  }

  onFilePicked(file: ReadFile) {
    this.str.addImageOverlay(
      file.name,
      URL.createObjectURL(file.underlyingFile)
    );
  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    console.log(this.status);
    this.filePicker.reset();
  }
}
