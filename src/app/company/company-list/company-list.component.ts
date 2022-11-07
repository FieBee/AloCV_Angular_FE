import { Component, OnInit } from '@angular/core';
import {Company} from "../../model/company";
import {Subscription} from "rxjs";
import {CompanyService} from "../../service/company/company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  // @ts-ignore
  company: Company[] ;

  constructor(private companyService: CompanyService) {
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
