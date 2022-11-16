import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {Account} from "../../model/account";

@Component({
  selector: 'app-company-account-management',
  templateUrl: './company-account-management.component.html',
  styleUrls: ['./company-account-management.component.css']
})
export class CompanyAccountManagementComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  companyList: Account[] = [];
  ngOnInit(): void {
    this.getAllAccountUser();
  }

  getAllAccountUser() {
    this.accountService.getAllAccountCompany().subscribe(data => {
      this.companyList = data;
      console.log(data);
    },error => console.error("Lỗi không lấy được list account user!!"))
  }

  block(id: number|undefined) {
    this.accountService.delete(id).subscribe(data =>{
      console.log("Khóa tài khoản thành công!!")
      this.getAllAccountUser();
    })
  }


  unblock(id: number|undefined){
    this.accountService.unblock(id).subscribe(data =>{
      console.log("Mở khóa tài khoản thành công!!")
      this.getAllAccountUser();
    })
  }

  setActiceTrue(id: number|undefined){
    this.accountService.setActice(id).subscribe(data => {
      console.log("Duyệt tài khoản thành công!!")
      this.getAllAccountUser();
    })

  }

}
