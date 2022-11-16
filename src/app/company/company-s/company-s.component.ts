import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-company-s',
  templateUrl: './company-s.component.html',
  styleUrls: ['./company-s.component.css']
})
export class CompanySComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    // this.getAllCompany();
  }
  // companyList: Company [] = []
  //
  // getAllCompany() {
  //   this.companyService.getAll().subscribe(data => {
  //     this.companyList = data;
  //   })
  // }
  //
  // setSuggestTrue(id: number) {
  //   this.companyService.setSuggestTrue(id).subscribe(data => {
  //     console.log("Đã thêm đề xuất!")
  //     this.getAllCompany()
  //   })
  // }
  //
  // setSuggestFalse(id: number) {
  //   this.companyService.setSuggestFalse(id).subscribe(data => {
  //     console.log("Đã bỏ đề xuất!")
  //     this.getAllCompany()
  //   })
  // }


}
