import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Job} from "../../model/job";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JobField} from "../../model/job-field";
import {LocationService} from "../../service/location/location.service";
import {JobFieldService} from "../../service/jobField/job-field.service";

@Component({
  selector: 'app-admin-job-management',
  templateUrl: './admin-job-management.component.html',
  styleUrls: ['./admin-job-management.component.css']
})
export class AdminJobManagementComponent implements OnInit {

  sub:Subscription;

  jobList: Job[] | undefined | any;

  job: Job = {
  };

  jobFieldList: JobField[]=[]

  locationList: any

  id: number | undefined;

  constructor(private jobService: JobService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService,
              private jobFieldService:JobFieldService) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getJob(this.id);
    })
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

}
