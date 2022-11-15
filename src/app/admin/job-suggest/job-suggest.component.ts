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
  jobList: Job[] | undefined | any;
  userId : number =1;
  dataRole = localStorage.getItem("role")

  constructor(private jobService: JobService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getJobByUserId(this.userId)
    console.log(this.userId)
  }
  getJobByUserId(id: number | undefined) {
    this.jobService.findJobByUserIdAndStatusIsTrue(id).subscribe((data: any) => {
      this.jobList = data
      console.log(data)
    }, error => console.log("fail"))
  }


}
