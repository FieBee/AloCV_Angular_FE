import {Component, OnInit} from '@angular/core';
import {MailService} from "../../service/mail/mail.service";
import {AccountService} from "../../service/account/account.service";
import {ShowMessage} from "../../commom/show-message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  userName: any;
  inputMail: boolean = false;
  inputOTP1: any = false;
  inputOTP2: any = false;
  checkMailFail:boolean = false;
  checkOTP:any;
  otp:any;
  newPassword:any;
  newAccount:any;
  accountId:any = 0;

  constructor(private mailService: MailService,
              private accountService: AccountService,
              private messageService: ShowMessage,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onCheckMail() {
    this.accountService.getAll().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName == this.userName){
          this.checkMailFail = false
          console.log(data[i])
          this.inputMail = true;
          this.otp= Math.floor(Math.random() * 10000)
          this.accountId = data[i].id;
          console.log(data[i].id)
          console.log(this.otp)
          this.mailService.sendOTP(this.userName,this.otp).subscribe(data => {
            console.log("da chay")
          })
          return;
        }
      }
      this.checkMailFail = true;
    })

  }

  sendOTP() {
    if (this.otp == this.checkOTP){
      this.inputOTP1 = true;
      this.inputMail = false;
      return
    }
    this.inputOTP1 = false
    this.inputOTP2 = true
  }

  editPassword(){
    this.newAccount = {
      userName: this.userName,
      password: this.newPassword
    }
    this.accountService.editAccount(this.accountId,this.newAccount).subscribe(data =>{
      this.messageService.alertForgotPassword();
      this.router.navigate(["login"])
      console.log("Thay đổi mật khẩu thành công!")
    })
  }



}
