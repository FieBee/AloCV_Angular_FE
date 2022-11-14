import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Location} from "../../model/location";
import {Job} from "../../model/job";
import {LocationService} from "../../service/location/location.service";
import {JobField} from "../../model/job-field";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  sub:Subscription;

  job: Job = {
    id: 0,
    name: "",
    jobField: {
      id: 0,
    },
    salaryRange: 0,
    location : {
      id: 0,
    },
    position: "",
    experience: "",
    jobType: "",
    expiredDate: new Date(),
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

  updateJob(editJobForm: NgForm){
    this.jobService.editJob(this.job.id, this.job).subscribe(()=>{
      Swal.fire('Sửa thành công!')
      this.router.navigate(['/company/company-management']);
    });
  }

  ngOnInit(){
    this.getAllLocation();
    this.getAllJobField();
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
