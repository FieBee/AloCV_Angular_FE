import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {CompanyCreateComponent} from "./company/company-create/company-create.component";
import {RegisterComponent} from "./register/register.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {JobListComponent} from "./job/job-list/job-list.component";
import {UserJobListComponent} from "./user/user-job-list/user-job-list.component";
import {JobCreateComponent} from "./job/job-create/job-create.component";
import {JobEditComponent} from "./job/job-edit/job-edit.component";
import {JobDeleteComponent} from "./job/job-delete/job-delete.component";
import {FindJobUserComponent} from "./user/find-job-user/find-job-user.component";
import {CvCreateComponent} from "./cv/cv-create/cv-create.component";
import {CvListComponent} from "./cv/cv-list/cv-list.component";


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
    path: '', component: HomeComponent
  },
  {
    path: 'company/list', component: CompanyListComponent
  },
  {
    path: 'user/job-list', component: UserJobListComponent
  },
  {
    path: '../home', component: JobListComponent
  },
  {
    path: 'job/job-create', component: JobCreateComponent
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


  // {
  // path: 'company/create', component: CompanyCreateComponent
  //
  // }
  { path: '**', component: HomeComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
