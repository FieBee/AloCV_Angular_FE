import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../security/login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public login: boolean | undefined;
  public objName: string | undefined;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("data")!== null){
      console.log("da dang nhap")
      this.login = true
      this.objName == localStorage.getItem("data")
    }else {
      console.log("chua dang nhap")
      this.login = false;
      this.objName =="Login"
    }
  }



}
