import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company/company.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  sub:Subscription;
  job: Job ={
  };
  companyList: Company |undefined;
  private id: number | undefined;

  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getJobById(this.id);
    })
  }

  ngOnInit(): void {

  }
  getJobById(j: number) {
    // this.jobService.findJobByCompanyId(1).subscribe();
    this.jobService.findById(j).subscribe((result: any) => {
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
