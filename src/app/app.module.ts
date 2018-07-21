import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSliderModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from "@angular/material";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { AppComponent } from "./app.component";
import { FileListComponent } from "./file-list/file-list.component";
import { ControlsComponent } from "./controls/controls.component";
import { FileHelpersModule } from "ngx-file-helpers";
import { FileControlsComponent } from "./file-controls/file-controls.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import { DeletionConfirmationDialogComponent } from "./deletion-confrimation-dialog/deletion-confrimation-dialog.component";
import { AddFileDialogComponent } from "./add-file-dialog/add-file-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    ControlsComponent,
    FileControlsComponent,
    DeletionConfirmationDialogComponent,
    AddFileDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    FileHelpersModule,
    NgxsModule.forRoot([]),
    NgxsStoragePluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddFileDialogComponent, DeletionConfirmationDialogComponent]
})
export class AppModule {}
