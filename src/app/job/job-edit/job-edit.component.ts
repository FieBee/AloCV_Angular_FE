import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "../../model/location";
import {Job} from "../../model/job";
import {LocationService} from "../../service/location/location.service";

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  sub:Subscription;

  // @ts-ignore
  job: Job = {
    id: 0,
    name: "",
    // jobField: {
    //   name: "",
    // },
    salaryRange: 0,
    location : {
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

  constructor(private jobService: JobService,
              private locationService: LocationService,
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

  updateJob(){
    this.jobService.editJob(this.job.id, this.job).subscribe(()=>{
      alert('Success')
      this.router.navigate(['/job/job-list']);
    });
  }

  ngOnInit(){
    this.getAllLocation();
  }

  getAllLocation() {
    this.locationService.getAll().subscribe((result: any) => {
      this.locationList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

}
