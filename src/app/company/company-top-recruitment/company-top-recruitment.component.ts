import { Component, OnInit } from '@angular/core';
import {JobService} from "../../service/job/job.service";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company/company.service";

@Component({
  selector: 'app-company-top-recruitment',
  templateUrl: './company-top-recruitment.component.html',
  styleUrls: ['./company-top-recruitment.component.css']
})
export class CompanyTopRecruitmentComponent implements OnInit {

  companyList: Company[]=[]

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getTopRecruitment();
  }

  getTopRecruitment(){
    this.companyService.getTopRecruitment().subscribe(data =>{
      this.companyList = data;
      console.log(data);
    },error => console.log("Lỗi không lấy được danh sách company!!"))
  }

}
