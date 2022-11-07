import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../service/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {ShowMessage} from "../../commom/show-message";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:boolean = true;
  message: string | undefined ="";

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  constructor(private jwtService : JwtClientService,
              private router : Router,
              private showMessage : ShowMessage) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    let resp = this.jwtService.login(this.loginForm.value);

    resp.subscribe(data => {
      if (!data){
        this.message = "Sai tên tài khoản hoặc mật khẩu!"
        // this.showMessage.alertLoginFail();
      }else {
        localStorage.setItem("data",JSON.parse(data));
        localStorage.setItem("token",JSON.parse(data).token);
        localStorage.setItem("role",JSON.parse(data).appRole[0].name);
        this.checkAccount(JSON.parse(data).appRole[0].name);
      }
    })
    window.onload;
  }

  getAppRole(){
    localStorage.getItem("role")
  }

  getData(){
    localStorage.getItem("data")
  }



  checkAccount(role:string){

    if (role == "ROLE_COMPANY"){
      console.log("if role company")
      this.getCompanyByAccount_UserName();
      this.router.navigate(['company'])
    }else if(role == "ROLE_USER" ||role == "ROLE_ADMIN" ){
      this.getUserByAccount_UserName();
      if (role == "ROLE_USER"){
        this.router.navigate(['user'])
      }else {
        this.router.navigate(['admin'])
      }
    }
    this.showMessage.alertLoginSuccess()
  }

  getUserByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getUserByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data => {
      localStorage.setItem("dataName",JSON.parse(data).name);
    },error1 => console.log("get user name id fail"))
  }

  getCompanyByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getCompanyByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data =>{
      localStorage.setItem("dataName",JSON.parse(data).name);
    },error => console.log("get company name id fail"))
  }



  get email() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
