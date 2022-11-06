import { Component, OnInit } from '@angular/core';
import {FindJobService} from "../../service/find-job.service";

@Component({
  selector: 'app-find-job-user',
  templateUrl: './find-job-user.component.html',
  styleUrls: ['./find-job-user.component.css']
})
export class FindJobUserComponent implements OnInit {
  listJob: any;
  public name = '';
  public salaryRange = '';
  public jobField = '';
  public location = '';
  public company = '';


  constructor(private FindJobService: FindJobService) { }

  ngOnInit(): void {
    // this.searchJob(0);
  }
  getSearch(pageable: any) {
    this.FindJobService.getAllJobBy(this.name, this.salaryRange, this.jobField, this.location, this.company, pageable).subscribe(data => {
      if (data === null) {
        console.log("Thông tin bạn tìm kiếm hiện không có trong hệ thống ", 'Thông báo !')
        // this.getListPeriodicPatient(0);
      } else {
        this.listJob = data;
      }
    });
  }
  // getListPeriodicPatient(pageable: any) {
  //   this.name = '';
  //   this.salaryRange = '';
  //   this.jobField = '';
  //   this.location = '';
  //   this.company = '';
  //
  //   this.FindJobService.getAllJob(pageable).subscribe(data => {
  //     this.listJob = data;
  //     console.log(data);
  //   }, error => console.log(error))
  // }

  // searchJob(pageable) {
  //   this.patientId = this.patientId.replace('BN-', '');
  //   this.patientId = this.patientId.replace('BN', '');
  //   this.patientId = this.patientId.replace('B', '');
  //   this.patientId = this.patientId.replace('N-', '');
  //   this.patientId = this.patientId.replace('N', '');
  //   console.log(this.patientId);
  //   if (this.patientId === '' && this.name === '') {
  //     this.getListPeriodicPatient(pageable);
  //   }
  //   this.getSearch(pageable)
  // }



}
