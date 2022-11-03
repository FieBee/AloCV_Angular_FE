import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../service/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:boolean = true;
  message: string | undefined;

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  constructor(private jwtService:JwtClientService,
              private router: Router) { }

  ngOnInit(): void {

  }

  public onSubmit(){

    try {
      let resp = this.jwtService.login(this.loginForm.value);
      resp.subscribe(data => {
          localStorage.setItem("token",JSON.parse(data).token);
          localStorage.setItem("role",JSON.parse(data).appRole[0].name);
          this.checkAccount(JSON.parse(data).appRole[0].name);
          return
        });
    }finally {
      this.alertLoginFail();
    }


  }

  getAppRole(){
    localStorage.getItem("role")
  }

  getData(){
    localStorage.getItem("data")
  }

  alertLoginFail(){
    if (this.status){
      alert("Sai tên tài khoản hoặc mật khẩu!")
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Đăng nhập thất bại, tài khoản của bạn đang bị khóa!',
      })
    }

  }

  alertLoginSuccess(){
    Swal.fire(
      '',
      'Đăng nhập thành công!',
      'success'
    )
  }

  checkAccount(role:string){

    if (role === "ROLE_COMPANY"){
      console.log("if role company")
      this.getCompanyByAccount_UserName();
      this.alertLoginSuccess()
      this.router.navigate(['company/home'])
    }else if(role === "ROLE_USER"){
      this.getUserByAccount_UserName();
      this.alertLoginSuccess()
      this.router.navigate(['user/home']);
    }else if(role === "ROLE_ADMIN"){
      this.alertLoginSuccess()
      this.router.navigate(['admin/home']);
    }else {
      if (this.status){
        alert("Sai tên đăng nhập hoặc mật khẩu!")
      }else {
        alert('Đăng nhập thất bại, tài khoản của bạn đang bị khóa!')
      }

    }
  }

  getUserByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getUserByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data => {
      localStorage.setItem("data",data);
    },error1 => console.log("Đối tượng đăng nhập không phải user"))
  }

  getCompanyByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getCompanyByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data =>{
      localStorage.setItem("data",data);
    },error => console.log("Đối tượng đăng nhập không phải company"))
  }

  logout(){
    localStorage.clear();
  }

  get email() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
