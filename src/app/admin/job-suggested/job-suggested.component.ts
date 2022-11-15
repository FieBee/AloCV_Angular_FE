import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";

@Component({
  selector: 'app-job-suggested',
  templateUrl: './job-suggested.component.html',
  styleUrls: ['./job-suggested.component.css']
})
export class JobSuggestedComponent implements OnInit {

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJob(th)
  }
  getJob(id: number | undefined) {
    this.jobService.getAll()
  }

}
