import { Component, OnInit } from '@angular/core';
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";

@Component({
  selector: 'app-user-job-list',
  templateUrl: './user-job-list.component.html',
  styleUrls: ['./user-job-list.component.css']
})
export class UserJobListComponent implements OnInit {

  job: Job[] | undefined ;

  constructor(private jobService: JobService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.jobService.getAll().subscribe((result: any) => {
      this.job = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

}
