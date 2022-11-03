import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {JobListComponent} from "./user/job-list/job-list.component";
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { UploadImageComponent } from './upload/upload-image/upload-image.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    UploadFileComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
