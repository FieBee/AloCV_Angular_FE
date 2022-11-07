import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  sub:Subscription;

  constructor(private jobService: JobService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.getJob(this.id);
    })
  }

  ngOnInit(): void {
  }

}
