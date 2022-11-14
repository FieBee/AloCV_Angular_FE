import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  constructor(private companyService:CompanyService,
              private jobService:JobService) { }

  ngOnInit(): void {
    this.getJobByCompanyId(this.companyId)
  }
  getJobByCompanyId(id: number | undefined) {
    this.jobService.findJobByCompanyId(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }
  jobList: Job[] | undefined | any;
  companyImg: any;
  companyId : any  = localStorage.getItem("dataId")

}
