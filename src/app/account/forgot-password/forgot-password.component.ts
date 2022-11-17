import {Component, OnInit} from '@angular/core';
import {MailService} from "../../service/mail/mail.service";
import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  userName: any;
  inputMail: boolean = false;
  inputOTP: boolean = false;
  checkMailFail:any;
  checkOTP:any;
  otp:any;
  newPassword:any;
  newAccount:any;
  accountId:any = 0;

  constructor(private mailService: MailService,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  onCheckMail() {
    this.accountService.getAll().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName == this.userName){
          console.log(data[i])
          this.inputMail = true;
          this.otp= Math.floor(Math.random() * 1000)
          this.accountId = data[i].id;
          console.log(data[i].id)
          console.log(this.otp)
          this.mailService.sendOTP(this.userName,this.otp).subscribe(data => {
            console.log("da chay")
          })
          return;
        }
      }
      this.checkMailFail = false;
    })

  }

  sendOTP() {
    if (this.otp == this.checkOTP){
      this.inputOTP = true;
      this.inputMail = false;
    }

  }

  editPassword(){
    this.newAccount = {
      userName: this.userName,
      password: this.newPassword
    }
    this.accountService.editAccount(this.accountId,this.newAccount).subscribe(data =>{
      console.log("Thay đổi mật khẩu thành công!")
    })
  }


}
