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
  private dataName: string | null | undefined;
  private dataImg: string | null | undefined;
  private dataId: string | null | undefined;


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
      }else if (JSON.parse(data).status == false){
        console.log("status fail")
        this.showMessage.alertLoginFail();
        return;
      }else if (JSON.parse(data).active == false){
        console.log(JSON.parse(data).active)
        console.log("active fail")
        this.showMessage.alertLoginFailActive();
        return;
      }else {
        localStorage.setItem("data",JSON.parse(data));
        localStorage.setItem("token",JSON.parse(data).token);
        localStorage.setItem("role",JSON.parse(data).appRole[0].name);
        this.checkAccount(JSON.parse(data).appRole[0].name);
      }
    })

  }

  getAppRole(){
    localStorage.getItem("role")
  }


  async checkAccount(role:string){
    if (!role){
      return;
    }

    if (role == "ROLE_COMPANY"){
      await this.showMessage.alertLoginSuccess()
      this.getCompanyByAccount_UserName();
      this.router.navigate(['company']).then(() => {
        window.location.reload();
      });
    }else if(role == "ROLE_USER" ||role == "ROLE_ADMIN" ){
      this.getUserByAccount_UserName();
      if (role == "ROLE_USER"){
        await this.showMessage.alertLoginSuccess()
        this.router.navigate(['user']).then(() =>{
          window.location.reload();
        });
      }else {
        await this.showMessage.alertLoginSuccess()
        this.router.navigate(['admin']).then(() => {
          window.location.reload();
        });
      }
    }


  }

  getUserByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getUserByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data => {
      localStorage.setItem("dataName",JSON.parse(data).name);
      localStorage.setItem("dataImg",JSON.parse(data).image);
      localStorage.setItem("dataId",JSON.parse(data).id);

    },error1 => console.log("get user name id fail"))
  }

  getCompanyByAccount_UserName(){
    let resp:Observable<any> = this.jwtService.getCompanyByAccount_UserName(this.loginForm.get("userName")?.value);
    resp.subscribe(data =>{
      localStorage.setItem("dataName",JSON.parse(data).name);
      localStorage.setItem("dataImg",JSON.parse(data).image);
      localStorage.setItem("dataId",JSON.parse(data).id);

    },error => console.log("get company name id fail"))
  }


  get email() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getData(){
    this.dataName = localStorage.getItem("dataName");
    this.dataImg  = localStorage.getItem("dataImg");
    this.dataId =  localStorage.getItem("dataId");
  }
}
