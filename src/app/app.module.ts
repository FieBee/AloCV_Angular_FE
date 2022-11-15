import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import {LoginComponent} from "./security/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
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
import { UserJobListComponent } from './user/user-job-list/user-job-list.component';
import { JobFieldComponent } from './job/job-field/job-field.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobCreateComponent } from './job/job-create/job-create.component';
import { JobEditComponent } from './job/job-edit/job-edit.component';
import { JobDeleteComponent } from './job/job-delete/job-delete.component';
import { CvCreateComponent } from './cv/cv-create/cv-create.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CompanyManagementComponent } from './company/company-management/company-management.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {JobDetailComponent} from "./job/job-detail/job-detail.component";
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { ApplyListComponent } from './cv/apply-list/apply-list.component';
import { CompanyTopRecruitmentComponent } from './company/company-top-recruitment/company-top-recruitment.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAccountManagementComponent } from './user/user-account-management/user-account-management.component';
import { AdminJobListComponent } from './admin/admin-job-list/admin-job-list.component';
import { CvEditComponent } from './cv/cv-edit/cv-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyListComponent,
    UploadFileComponent,
    UploadImageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompanyCreateComponent,
    UserListComponent,
    RegisterComponent,
    UserRegisterComponent,
    UserJobListComponent,
    JobFieldComponent,
    JobListComponent,
    UserJobListComponent,
    JobCreateComponent,
    JobEditComponent,
    JobDeleteComponent,
    CvCreateComponent,
    CvListComponent,
    CompanyManagementComponent,
    NotfoundComponent,
    JobDetailComponent,
    ApplyListComponent,
    CompanyEditComponent,
    CompanyTopRecruitmentComponent,
    CompanyDetailComponent,
    UserDetailComponent,
    UserAccountManagementComponent,
    AdminJobListComponent,
    CvEditComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
//@ts-ignore
