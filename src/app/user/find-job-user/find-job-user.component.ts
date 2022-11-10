import { Component, OnInit } from '@angular/core';
import {FindJobService} from "../../service/find-job.service";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {JobField} from "../../model/job-field";
import {LocationService} from "../../service/location/location.service";
import {Location} from "../../model/location";
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";

@Component({
  selector: 'app-find-job-user',
  templateUrl: './find-job-user.component.html',
  styleUrls: ['./find-job-user.component.css']
})
export class FindJobUserComponent implements OnInit {

  salaryRangeList:number[] = [1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000];
  salaryRange_min:number | any = 0;
  salaryRange_max:number | any = 1000000000;
  public name = ' ';
  public jobField = ' ';
  public location = ' ';
  public company = ' ';
  jobFieldList: JobField[]=[]
  locationList: Location[]=[]
  companyList: Company[]=[]
  jobList: Job[]=[]

  constructor(private FindJobService: FindJobService,
              private JobFieldService: JobFieldService,
              private LocationService: LocationService,
              private CompanyService: CompanyService,
              private JobService: JobService) { }

  ngOnInit(): void {
    this.getAllJobField()
    this.getAllLocation()
    this.getAllCompany()
    this.getAllJob()

  }
  getSearch(pageable: any) {
    console.log(this.name)
    console.log(this.salaryRange_min)
    console.log(this.salaryRange_max)
    console.log(this.jobField)
    console.log(this.location)
    console.log(this.company)

    this.FindJobService.getAllJobBy(this.name,this.salaryRange_min , this.salaryRange_max, this.jobField, this.location, this.company).subscribe(data => {
      this.jobList=data
      console.log(data)
    });
  }

  getAllJob() {
    this.JobService.getAll().subscribe((result: any) => {
      this.jobList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getAllJobField() {
    this.JobFieldService.getAll().subscribe((result: any) => {
      this.jobFieldList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }
  getAllLocation() {
    this.LocationService.getAll().subscribe((result: any) => {
      this.locationList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getAllCompany() {
    this.CompanyService.getAll().subscribe((result: any) => {
      this.companyList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

}
