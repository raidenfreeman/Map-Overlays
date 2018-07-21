import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from "../../../node_modules/@angular/material";

export interface AddFileDialogData {
  north: number;
  west: number;
  east: number;
  south: number;
  fileName: number;
}

@Component({
  selector: "app-add-file-dialog",
  templateUrl: "./add-file-dialog.component.html",
  styleUrls: ["./add-file-dialog.component.css"]
})
export class AddFileDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddFileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddFileDialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
