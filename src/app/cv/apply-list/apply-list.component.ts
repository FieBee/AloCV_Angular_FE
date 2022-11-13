import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";
import {Job} from "../../model/job";

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrls: ['./apply-list.component.css']
})
export class ApplyListComponent implements OnInit {

  jobList:Job[] = []
  userId: any;
  constructor(private jobService: JobService) {
    this.userId = localStorage.getItem("dataId")
  }

  ngOnInit(): void {
    this.getJobApply();
  }

  getJobApply(){
    this.jobService.findJobByUserId(this.userId).subscribe(data =>{
      this.jobList = data;
      console.log(data)
      console.log("Lấy danh sách công việc đã ứng tuyển thành công!")
    },error => console.log("cant get list job apply"))
  }
}
