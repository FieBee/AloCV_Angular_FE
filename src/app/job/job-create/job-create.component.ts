import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../service/job/job.service";
import {LocationService} from "../../service/location/location.service";
import {Job} from "../../model/job";
import {Location} from "../../model/location";
import {JobField} from "../../model/job-field";
import {JobFieldService} from "../../service/jobField/job-field.service";

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {

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
    recruitNumber: new FormControl('', [Validators.required]),
    gender: new FormControl(),
  });

  locationList: Location[] | undefined;

  jobFieldList: JobField[] | undefined;
  companyId: any | null = localStorage.getItem('dataId')

  constructor(private jobService: JobService,
              private jobFieldService: JobFieldService,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getAllLocation()
    this.getAllJobField()
  }

  addJob() {
    const job: Job = {
      name: this.jobForm.value.name,
      jobField: {
        id: this.jobForm.value.jobField
      },
      salaryRange: this.jobForm.value.salaryRange,
      location: {
        id: this.jobForm.value.location
      },
      company: {
        id:this.companyId
      },
      position: this.jobForm.value.position,
      experience: this.jobForm.value.experience,
      jobType: this.jobForm.value.jobType,
      expiredDate: this.jobForm.value.expiredDate,
      description: this.jobForm.value.description,
      recruitNumber: this.jobForm.value.recruitNumber,
      gender: this.jobForm.value.gender,
    };
    console.log(job)
    this.jobService.saveJob(job).subscribe(() => {
      alert('success');
      this.jobForm.reset();
    }, () => {
    });
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

  get recruitNumber(){
    return this.jobForm.get('recruitNumber');
  }


}
