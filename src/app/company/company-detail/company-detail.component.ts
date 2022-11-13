import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";
import {JobService} from "../../service/job/job.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CvService} from "../../service/cv/cv.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  private sub: Subscription;

  constructor(private jobService: JobService,
              private companyService: CompanyService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cvService: CvService
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.companyId = +paramMap.get('id');
      this.getCompanyById(this.companyId);
      console.log(this.companyId)
    })
  }

  companyId:number|undefined;
  company:Company={}

  ngOnInit(): void {
  }

  getCompanyById(companyId: number){
    this.companyService.findById(companyId).
    subscribe(company =>{
      this.company = company;
    });
  }

}
