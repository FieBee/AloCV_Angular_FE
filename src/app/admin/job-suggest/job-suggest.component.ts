import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Job} from "../../model/job";
import {UserService} from "../../service/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-job-suggest',
  templateUrl: './job-suggest.component.html',
  styleUrls: ['./job-suggest.component.css']
})
export class JobSuggestComponent implements OnInit {
  sub:Subscription;
  id: any;
  jobId: any;
  dataRole = localStorage.getItem("role")
  jbs: Job[] | undefined;

  constructor(private jobService: JobService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.sub=this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getJobByUserId();
      console.log(this.id)
    })
  }

  ngOnInit(): void {
    this.suggestJob()
    this.getUserId()
    this.getJobByUserId();
  }

  suggestJob() {
    if (this.jobId) {
      this.jobService.findById(this.jobId).subscribe(data => {
        console.log(this.jobId)
        this.userService.findById(this.id).subscribe(userData =>{
          data.user=userData
          this.jobService.editJob(data.id,data).subscribe(data => {
            Swal.fire("Đã đưa lên danh mục đề xuất!")
          },error => console.log("Thử lại"))
          })
        })
      } else {
      alert("Chọn lại")
    }
  }

    getJobByUserId(){
    this.jobService.findJobByUserId(this.id).subscribe((data: any) =>{
      this.jbs= data;
      console.log(data)
    })
    }


  getUserId(){
    return localStorage.getItem("dataId");
  }

}
