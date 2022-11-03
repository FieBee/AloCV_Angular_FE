import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../service/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  constructor(private jwtService:JwtClientService,
              private router: Router) { }

  ngOnInit(): void {

  }

  public onSubmit(){


    let resp = this.jwtService.login(this.loginForm.value);

    resp.subscribe(data => {
        localStorage.setItem("token",JSON.parse(data).token);
        localStorage.setItem("role",JSON.parse(data).appRole[0].name);
        this.checkAccount(JSON.parse(data).appRole[0].name);
      }, error => {
        console.log("err")
      }
    );
  }

  getAppRole(){
    localStorage.getItem("role")
  }

  getData(){
    localStorage.getItem("data")
  }



  checkAccount(role:string){
    console.log(role)
    if (role === "ROLE_COMPANY"){
      console.log("if role company")
      this.getCompanyByAccount_UserName();
      this.router.navigate(['/company/home'])
    }else if(role === "ROLE_USER"){
      this.getUserByAccount_UserName();
      this.router.navigate(['/user/home']);
    }else if(role === "ROLE_ADMIN"){
      this.router.navigate(['/admin/home']);
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
