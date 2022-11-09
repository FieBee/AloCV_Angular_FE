import {Component, OnInit} from '@angular/core';
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";
import {LocationService} from "../../service/location/location.service";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  job: Job[] | undefined | any;
  company: Company[] | undefined
  location: any
  jobField: any


  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private locationService: LocationService,
              private JobFieldService: JobFieldService) {
  }

  ngOnInit(): void {
    this.getAllCompany();
    this.getAllLocation();
    this.getAllJobField();
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

  getJobByCompanyId(id: number | undefined) {
    this.jobService.findJobByCompanyId(id).subscribe((data: any) => {
      this.job = data
      console.log(data)
    }, error => console.log("fail"))
  }

  getJobByLocationId(id: number | undefined) {
    this.jobService.findJobByLocationId(id).subscribe((data: any) => {
      this.job = data
      console.log(data)
    }, error => console.log("fail"))
  }
  getJobByJobFieldId(id: number | undefined) {
    this.jobService.findJobByJobFieldId(id).subscribe((data:any) => {
      this.job = data
      console.log(data)
    }, error => console.log("fail"))
  }

  getAllCompany() {
    this.companyService.getAll().subscribe(data => {
      this.company = data;
    })
  }

  getAllLocation() {
    this.locationService.getAll().subscribe(data => {
      this.location = data;
      console.log(data)
    })
  }
  getAllJobField() {
    this.JobFieldService.getAll().subscribe(data =>{
      this.jobField = data;
      console.log(data)
    })
  }
}
