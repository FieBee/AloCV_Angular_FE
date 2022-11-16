import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JobField} from "../../model/job-field";
import {LocationService} from "../../service/location/location.service";
import {JobFieldService} from "../../service/jobField/job-field.service";
import Swal from "sweetalert2";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-admin-job-management',
  templateUrl: './admin-job-management.component.html',
  styleUrls: ['./admin-job-management.component.css']
})
export class AdminJobManagementComponent implements OnInit {

  // sub:Subscription;

  jobList: Job[] | undefined | any;

  job: Job = {
  };

  jobFieldList: JobField[]=[]

  locationList: any

  id: any = localStorage.getItem("dataId");
  jobId: any;
  jbs: Job[] | undefined;
  dataRole = localStorage.getItem("role")

  constructor(private jobService: JobService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService,
              private jobFieldService:JobFieldService,
              private userService: UserService) {
    // this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
    //   // @ts-ignore
    //   this.id = +paramMap.get('id');
    //   this.getJobById(this.id);
    // })
  }

  getJob(id: number){
    this.jobService.findById(id).
    subscribe(job =>{
      this.job = job;
    });
  }

  getAllJob() {
    this.jobService.findAllJob().subscribe((result: any) => {
      this.jobList = result;
      // console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getAllJob()
    this.getUserId()
  }

  lockJob(id: number | undefined) {
    this.jobService.delete(id).subscribe(() => {
      // Swal.fire('Khóa thành công!');
      this.getAllJob();
      // this.router.navigate(['/admin/admin-job']);
    }, e => {
      console.log(e);
    });
  }

  unlockJob(id: number | undefined) {
    this.jobService.unlock(id).subscribe(() => {
      // Swal.fire('Mở khóa thành công!');
      this.getAllJob();
      // this.router.navigate(['/admin/admin-job']);
    }, e => {
      console.log(e);
    });
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

  suggestJob(id: number | undefined) {
    // if(this.jobId) {
      this.jobService.findById(id).subscribe(data => {
        console.log(id)
        this.userService.findById(this.id).subscribe(userData =>{
          data.user=userData
          console.log(data.user)
          console.log(userData)
          this.jobService.editJob(data.id,data).subscribe(data => {
            // Swal.fire("Đã đưa lên danh mục đề xuất!")
            this.getAllJob()
          },error => console.log("Thử lại"))
        })
      })
    // } else {
    //   alert("Chọn lại")
    // }
  }
  reverseSuggest(id: number|undefined){
      this.jobService.reverseSuggest(id).subscribe(data =>{
        // Swal.fire("Đã xóa khỏi danh mục đề xuất")
        this.getAllJob()
      })
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

  // getJobByUserId(){
  //   this.jobService.findJobByUserId(this.id).subscribe((data: any) =>{
  //     this.jbs= data;
  //     console.log(data)
  //   })
  // }

  getUserId(){
    return localStorage.getItem("dataId");
  }

}
