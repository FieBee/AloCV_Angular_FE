import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  jobId: number | undefined;
  job: Job ={
  };
  companyList: Company |undefined;

  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.getJobById()
  }
  getJobById() {
    this.jobService.findById(1).subscribe((result: any) => {
      console.log(this.job)
      // alert("ok")
      this.job = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getAllCompanyById() {
    this.companyService.findById(1).subscribe((result: any) => {
      this.companyList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }
}
