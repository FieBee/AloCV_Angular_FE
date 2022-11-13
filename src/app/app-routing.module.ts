import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {CompanyCreateComponent} from "./company/company-create/company-create.component";
import {RegisterComponent} from "./register/register.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {UserJobListComponent} from "./user/user-job-list/user-job-list.component";
import {JobCreateComponent} from "./job/job-create/job-create.component";
import {JobEditComponent} from "./job/job-edit/job-edit.component";
import {JobDeleteComponent} from "./job/job-delete/job-delete.component";

// import {FindJobUserComponent} from "./user/find-job-user/find-job-user.component";
import {CompanyManagementComponent} from "./company/company-management/company-management.component";

import {CvCreateComponent} from "./cv/cv-create/cv-create.component";
import {CvListComponent} from "./cv/cv-list/cv-list.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {
  RoleGuardService as AuthGuard
} from './service/role-guard.service';
import {JobDetailComponent} from "./job/job-detail/job-detail.component";
import {ApplyListComponent} from "./cv/apply-list/apply-list.component";
import {CompanyEditComponent} from "./company/company-edit/company-edit.component";


export const ROUTES: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register',
  //   loadChildren: () => import('./register/register.module').then(module => module.RegisterModule),
    component: RegisterComponent
  },
  {
    path: 'register/user',
    component: UserRegisterComponent
  },
  {
    path: 'register/company',
    component: CompanyCreateComponent
  },
  {
    path: 'user', component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      roles:["ROLE_USER"]
    }
  },
  {
    path: 'admin', component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      roles:["ROLE_ADMIN"]
    }
  },
  {
    path: 'company', component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      roles:["ROLE_COMPANY"]
    }
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'company/list', component: CompanyListComponent
  },
  {
    path: 'user/job-list', component: UserJobListComponent
  },
  {
    path: 'job/job-create', component: JobCreateComponent
  },
  {
    path: 'job/job-detail/:id', component: JobDetailComponent
  },
  {
    path: 'job/job-edit/:id', component: JobEditComponent
  },
  {
    path: 'job/job-delete/:id', component: JobDeleteComponent
  },
  {
    path: 'user/create-cv', component: CvCreateComponent
  },
  {
    path: 'user/list-cv', component: CvListComponent
  },
  {
    path: 'job/job-detail/:id', component: JobDetailComponent

  },
  {

    path: 'company/company-management', component: CompanyManagementComponent
  },
  {
    path: 'user/list-apply', component: ApplyListComponent

  },
  {
  path: 'company/edit/:id', component: CompanyEditComponent
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
