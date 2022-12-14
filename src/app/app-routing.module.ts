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
import {CvCreateComponent} from "./cv/cv-create/cv-create.component";
import {CvListComponent} from "./cv/cv-list/cv-list.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {
  RoleGuardService as AuthGuard
} from './service/role-guard.service';
import {ApplyListComponent} from "./cv/apply-list/apply-list.component";
import {CompanyEditComponent} from "./company/company-edit/company-edit.component";
import {CompanyManagementComponent} from "./company/company-management/company-management.component";
import {JobDetailComponent} from "./job/job-detail/job-detail.component";
import {CompanyDetailComponent} from "./company/company-detail/company-detail.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {UserAccountManagementComponent} from "./user/user-account-management/user-account-management.component";
import {
  CompanyAccountManagementComponent
} from "./company/company-account-management/company-account-management.component";
import {AccountManagementComponent} from "./account/account-management/account-management.component";
import {CvEditComponent} from "./cv/cv-edit/cv-edit.component";
import {CvDeleteComponent} from "./cv/cv-delete/cv-delete.component";
import {AdminJobManagementComponent} from "./admin/admin-job-management/admin-job-management.component";
import {JobSuggestComponent} from "./admin/job-suggest/job-suggest.component";
import {CompanySuggestComponent} from "./company/company-suggest-management/company-suggest.component";
import {CvDetailComponent} from "./cv/cv-detail/cv-detail.component";
import {ForgotPasswordComponent} from "./account/forgot-password/forgot-password.component";



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
    path: 'admin/management/user', component: UserAccountManagementComponent
  },
  {
    path: 'admin/management/company', component: CompanyAccountManagementComponent
  },

  {
    path: 'company', component: HomeComponent,
    canActivate: [AuthGuard],
    data:{
      roles:["ROLE_COMPANY"]
    }
  },
  {
    path: 'company/list', component: CompanyListComponent
  },
  {
    path: 'company/company-detail/:id', component: CompanyDetailComponent
  },
  {
    path: 'user/company-detail/:id', component: CompanyDetailComponent
  },
  {
    path: 'company-detail/:id', component: CompanyDetailComponent
  },
  {
    path: 'user/job-list', component: UserJobListComponent
  },
  {
    path: 'company/job/job-create', component: JobCreateComponent
  },
  {
    path: 'job/job-detail/:id', component: JobDetailComponent
  },
  // {
  //   path: 'company/job/job-edit/:id', component: JobEditComponent
  // },
  // {
  //   path: 'job/job-delete/:id', component: JobDeleteComponent
  // },
  {
    path: 'user/create-cv', component: CvCreateComponent
  },
  {
    path: 'user/list-cv', component: CvListComponent
  },
  {
    path: 'cv/cv-detail/:id', component: CvDetailComponent
  },
  {
    path: 'user/edit-cv/:id', component: CvEditComponent
  },{
    path: 'user/delete-cv/:id', component: CvDeleteComponent
  },
  // {
  //   path: 'job/job-detail/:id', component: JobDetailComponent
  //
  // },
  {
    path: 'company/company-management', component: CompanyManagementComponent
  },
  {
    path: 'company/company-management/job-edit/:id', component: JobEditComponent
  },
  {
    path: 'company/company-management/job-delete/:id', component: JobDeleteComponent
  },
  {
    path: 'company/company-management/job-detail/:id', component: JobDetailComponent
  },

  {
    path: 'user/list-apply', component: ApplyListComponent

  },
  {
  path: 'company/company-detail/:id/edit/:id', component: CompanyEditComponent
  },
  {
  path: 'company/user-detail/:id', component: UserDetailComponent
  },
  {
    path: 'user/user-detail/:id', component: UserDetailComponent
  },
  {
    path: 'admin/admin-job-management', component: AdminJobManagementComponent
  },
  { path: '', component: HomeComponent },
  // { path: '**', component: NotfoundComponent },
  {
    path: 'admin/job-suggest/', component: JobSuggestComponent
  },
  {
    path: 'admin/company-suggest', component: CompanySuggestComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule { }
