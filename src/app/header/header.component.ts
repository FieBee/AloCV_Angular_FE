import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../security/login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public login: boolean | undefined;
  public dataName: string | null = localStorage.getItem("dataName") ;
  public checkRole: string | null | undefined ;

  constructor() { }

  ngOnInit(): void {
    if (this.dataName!==null){
      console.log("da dang nhap")
      this.login = true
    }else {
      console.log("chua dang nhap")
      this.login = false;
      this.dataName == "Login"
    }
    this.checkRole = localStorage.getItem("role");
  }

  logout(){
    localStorage.clear();
  }

}
