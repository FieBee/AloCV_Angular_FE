import {Component, OnInit} from '@angular/core';
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";
import {LocationService} from "../../service/location/location.service";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {JobField} from "../../model/job-field";
import {Location} from "../../model/location";



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  salaryRangeList:string[] = ["Dưới 5Tr",
    "5Tr - 10Tr",
    "10Tr - 30Tr",
    "Trên 30Tr",
  ];
  salaryRange_min:number | any = 0;
  salaryRange_max:number | any = 1000000000;
  public name = '';
  public jobField = '';
  public locationData = '';
  public companyData = '';
  salary: string | undefined

  checkSalary(){
    if (this.salary == "Dưới 5Tr"){
      this.salaryRange_min = 0;
      this.salaryRange_max = 5000000
    }else if (this.salary == "5Tr - 10Tr"){
      this.salaryRange_min = 5000000;
      this.salaryRange_max = 10000000
    }else if (this.salary == "10Tr - 30Tr"){
      this.salaryRange_min = 10000000;
      this.salaryRange_max = 30000000
    }else if(this.salary == "Trên 30Tr"){
      this.salaryRange_min = 30000000;
      this.salaryRange_max = 10000000000;
    }else {
      this.salaryRange_min = 0;
      this.salaryRange_max = 10000000000;
    }
    this.getSearch(0)
  }

  jobFieldList: JobField[]=[]
  locationList: any
  jobList: Job[] | undefined | any;
  companyList: Company[] | undefined
  companyImg: any;


  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private locationService: LocationService,
              private jobFieldService:JobFieldService) {
  }

  ngOnInit(): void {
    this.getAllJobField()
    this.getAllCompany();
    this.getAllLocation();
    this.getAllJob();

  }

  getSearch(pageable: any) {
    console.log(this.name)
    console.log(this.salaryRange_min)
    console.log(this.salaryRange_max)
    console.log(this.jobField)
    console.log(this.locationData)
    console.log(this.companyData)

    this.jobService.getAllJobBy(this.name,this.salaryRange_min , this.salaryRange_max,
      this.jobField, this.locationData, this.companyData).subscribe(data => {
      this.jobList=data
      console.log(data)
    });
  }

  getAllJob() {
    this.jobService.getAll().subscribe((result: any) => {
      this.jobList = result;
      // console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getJobByCompanyId(id: number | undefined) {
    this.jobService.findJobByCompanyId(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }

  getJobByLocationId(id: number | undefined) {
    this.jobService.findJobByLocationId(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }
  getJobByJobFieldId(id: number | undefined) {
    this.jobService.findJobByJobFieldId(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }


  getAllCompany() {
    this.companyService.getAll().subscribe(data => {
      this.companyList = data;
    })
  }

  getAllLocation() {
    this.locationService.getAll().subscribe(data => {
      this.locationList = data;
      console.log(data)
    })
  }

  getAllJobField() {
    this.jobFieldService.getAll().subscribe((result: any) => {
      this.jobFieldList = result;
    }, (error: any) => {
      console.log(error);
    })
  }


  getJobByJobFieldId(id: number | undefined) {
    this.jobService.findJobByJobFieldId(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }
}
