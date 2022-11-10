import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Job} from "../../model/job";
import {Location} from "../../model/location";
import {JobService} from "../../service/job/job.service";
import {LocationService} from "../../service/location/location.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {JobField} from "../../model/job-field";

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent implements OnInit {

  sub:Subscription;

  // @ts-ignore
  job: Job = {
    id: 0,
    name: "",
    // jobField: {
    //   name: "",
    // },
    salaryRange: 0,
    location: {
      name: "",
    },
    position: "",
    experience: "",
    jobType: "",
    // expiredDate: Date,
    recruitNumber: 0,
    gender: "",
    description: "Mo ta",
  };

  id: number | undefined;

  locationList: Location[] | undefined;

  jobFieldList: JobField[] | undefined;

  constructor(private jobService: JobService,
              private locationService: LocationService,
              private jobFieldService: JobFieldService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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

  deleteJob(id: number | undefined) {
    this.jobService.delete(id).subscribe(() => {
      alert('Delete success!');
      this.router.navigate(['/job/job-list']);
    }, e => {
      console.log(e);
    });
  }

  ngOnInit(){
    this.getAllLocation()
    this.getAllJobField()
  }

  getAllLocation() {
    this.locationService.getAll().subscribe((result: any) => {
      this.locationList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getAllJobField() {
    this.jobFieldService.getAll().subscribe((result: any) => {
      this.jobFieldList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }
}
