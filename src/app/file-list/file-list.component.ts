import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import {
  ReadFile,
  FilePickerDirective,
  ReadMode
} from "../../../node_modules/ngx-file-helpers";
import { ImageStorageService } from "../image-storage.service";

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"]
})
export class FileListComponent {
  constructor(private str: ImageStorageService){}
  @ViewChild(FilePickerDirective) private filePicker;
  public status: string;
  public picked: ReadFile;
  public readMode = ReadMode.arrayBuffer;
  public files: ReadFile[] = [];

  onFilePicked(file: ReadFile) {
    // file.content
    // file.

    // console.log(file);
    // this.files.push(file);
    this.str.doit(URL.createObjectURL(file.underlyingFile));
    // this.picked = file;

  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    console.log(this.status);
    this.filePicker.reset();
  }
}
