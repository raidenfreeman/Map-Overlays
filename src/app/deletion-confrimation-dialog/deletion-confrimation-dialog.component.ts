import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../file-controls/file-controls.component";

@Component({
  selector: "app-deletion-confrimation-dialog",
  templateUrl: "./deletion-confrimation-dialog.component.html",
  styleUrls: ["./deletion-confrimation-dialog.component.css"]
})
export class DeletionConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletionConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
