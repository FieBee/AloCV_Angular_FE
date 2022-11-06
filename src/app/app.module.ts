import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import {LoginComponent} from "./security/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {JobListComponent} from "./user/job-list/job-list.component";
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { UploadImageComponent } from './upload/upload-image/upload-image.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';

import { UserListComponent } from './user/user-list/user-list.component';

import { RegisterComponent } from './register/register.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FindJobUserComponent } from './user/find-job-user/find-job-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyListComponent,
    JobListComponent,
    UploadFileComponent,
    UploadImageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompanyCreateComponent,
    UserListComponent,
    RegisterComponent,
    UserRegisterComponent,
    FindJobUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
