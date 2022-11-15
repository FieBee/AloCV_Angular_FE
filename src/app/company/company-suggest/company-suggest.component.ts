import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-company-suggest',
  templateUrl: './company-suggest.component.html',
  styleUrls: ['./company-suggest.component.css']
})
export class CompanySuggestComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  companyList: Company [] = []

  getAllCompany(){
    this.companyService.getAll().subscribe(data => {
      this.companyList = data;
    })
  }
}
