import { Component, OnInit } from '@angular/core';
import {Company} from "../../model/company";
import {Subscription} from "rxjs";
import {CompanyService} from "../../service/company/company.service";
import {ActivatedRoute} from "@angular/router";
import {JobService} from "../../service/job/job.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company: Company[] | undefined ;

  constructor(private companyService: CompanyService,
              private jobService:JobService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.companyService.getAll().subscribe((result: any) => {
      this.company = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }



}
