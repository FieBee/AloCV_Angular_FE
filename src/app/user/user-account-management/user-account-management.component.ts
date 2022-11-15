import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {Account} from "../../model/account";

@Component({
  selector: 'app-user-account-management',
  templateUrl: './user-account-management.component.html',
  styleUrls: ['./user-account-management.component.css']
})
export class UserAccountManagementComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  userList: Account[] = [];
  ngOnInit(): void {
    this.getAllAccountUser();
  }

  getAllAccountUser() {
    this.accountService.getAllAccountUser().subscribe(data => {
      this.userList = data;
      console.log(data);
    },error => console.error("Lỗi không lấy được list account user!!"))
  }

  block(id: number|undefined) {
    this.accountService.delete(id).subscribe(data =>{
      console.log("Khóa tài khoản thành công!!")
    })
    location.reload();
  }


  unblock(id: number|undefined){
    this.accountService.unblock(id).subscribe(data =>{
      console.log("Mở khóa tài khoản thành công!!")
    })
    location.reload();
  }
}
