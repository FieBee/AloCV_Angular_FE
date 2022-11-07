import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../service/job/job.service";
import {LocationService} from "../../service/location/location.service";
import {Job} from "../../model/job";
import {Location} from "../../model/location";

@Component({
  selector: 'app-admin-job-create',
  templateUrl: './admin-job-create.component.html',
  styleUrls: ['./admin-job-create.component.css']
})
export class AdminJobCreateComponent implements OnInit {

  jobForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    jobField: new FormControl(),
    salaryRange: new FormControl(),
    location: new FormControl(),
    position: new FormControl(),
    experience: new FormControl(),
    jobType: new FormControl(),
    expiredDate: new FormControl(),
    description: new FormControl(),
    recruitNumber: new FormControl(),
    gender: new FormControl(),
  });

  locationList: Location[] | undefined;

  constructor(private jobService: JobService,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  addJob() {
    const job: Job = {
      name: this.jobForm.value.name,
      location: {
        id: this.jobForm.value.location
      }
    };
    this.jobService.saveJob(job).subscribe(() => {
      alert('success');
      this.jobForm.reset();
    }, () => {
    });
  }

  getAll() {
    this.locationService.getAll().subscribe((result: any) => {
      this.locationList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

}
