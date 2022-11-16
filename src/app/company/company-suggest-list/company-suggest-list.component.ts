import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-company-suggest-list',
  templateUrl: './company-suggest-list.component.html',
  styleUrls: ['./company-suggest-list.component.css']
})
export class CompanySuggestListComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanySuggest();
  }

  companyList : Company[] = []
  getCompanySuggest(){
    this.companyService.getCompanySuggest().subscribe(data => {
      this.companyList = data;
    })
  }
}
