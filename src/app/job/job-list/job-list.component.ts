import { Component, OnInit } from '@angular/core';
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  job: Job[] | undefined |any;
  conpanyId: number| any;
  company: Company[] |undefined

  constructor(private jobService: JobService,
              private companyService:CompanyService) {
  }

  ngOnInit(): void {
    this.getAllCompany();
    this.getAll();
  }

  getAll() {
    this.jobService.getAll().subscribe((result: any) => {
      this.job = result;
      // console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getJobByCompanyId(id: number | undefined){
    this.jobService.findJobByCompanyId(id).subscribe((data:any )=>{
      this.job = data
      console.log(data)
    },error => console.log("fail"))
  }

  getAllCompany(){
    this.companyService.getAll().subscribe(data =>{
      this.company = data;
    })
  }
}
