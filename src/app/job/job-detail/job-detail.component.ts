import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company/company.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CvService} from "../../service/cv/cv.service";

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
  id: any;
  dataRole = localStorage.getItem("role")
  cvList:any;
  cvId: any;


  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cvService: CvService
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getJobById(this.id);
      console.log(this.id)
    })
  }

  applyCv(){
    this.cvService.findById(this.cvId).subscribe(data =>{
      console.log(this.cvId)
      this.jobService.findById(this.id).subscribe(jobData => {
        data.job = jobData
        this.cvService.editCv(data.id,data).subscribe(data=> {
          alert("Ứng tuyển thành công!")
        },error => console.log("Lỗi add Cv"))
      })
    })
  }

  ngOnInit(): void {
    this.getAllCv();
  }
  getJobById(j: number) {
    this.jobService.findById(j).subscribe((result: any) => {
      console.log(this.job)
      this.job = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getAllCv(){
    this.cvService.findCVByUserId(this.getUserId()).subscribe(data=>{
      this.cvList = data;
      console.log("Đã lấy được list Cv by UserId")
    })
  }

  getUserId(){
    return localStorage.getItem("dataId");
  }
}
