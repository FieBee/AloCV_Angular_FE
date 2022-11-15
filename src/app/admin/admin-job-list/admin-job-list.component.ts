import { Component, OnInit } from '@angular/core';
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";

@Component({
  selector: 'app-admin-job-list',
  templateUrl: './admin-job-list.component.html',
  styleUrls: ['./admin-job-list.component.css']
})
export class AdminJobListComponent implements OnInit {

  jobList: Job[] | undefined | any;


  constructor(private jobService: JobService) { }

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
  }

}
