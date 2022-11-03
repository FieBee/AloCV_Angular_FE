import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../service/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });


  constructor(private jwtService:JwtClientService) { }

  ngOnInit(): void {

  }

  public onSubmit(){


    let resp = this.jwtService.login(this.form.value);

    resp.subscribe(data => {
        // localStorage.setItem("data",JSON.stringify(data));
        localStorage.setItem("token",JSON.parse(data).token);
        localStorage.setItem("role",JSON.parse(data).appRole[0].name);
        this.checkAccount(JSON.parse(data).appRole[0].name);
      }, error => {
        console.log("err")
      }
    );
  }


  checkAccount(role:string){
    console.log(role)
    if (role === "ROLE_COMPANY"){
      console.log("if role company")
      this.getCompanyByAccount_UserName();
    }else if(role === "ROLE_USER"){
      this.getUserByAccount_UserName();
    }else {
      // console.error("Lỗi đăng nhập");
    }
  }

  getUserByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getUserByAccount_UserName(this.form.get("userName")?.value);
    resp.subscribe(data => {
      localStorage.setItem("user",data);
    },error1 => console.log("Đối tượng đăng nhập không phải user"))
  }

  getCompanyByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getCompanyByAccount_UserName(this.form.get("userName")?.value);
    resp.subscribe(data =>{
      localStorage.setItem("company",data);
    },error => console.log("Đối tượng đăng nhập không phải company"))
  }

  logout(){
    localStorage.clear();
  }

}
