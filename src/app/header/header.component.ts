import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginComponent} from "../security/login/login.component";
import {ShowMessage} from "../commom/show-message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {


  public login: boolean | undefined;
  public dataName: string | null | undefined ;
  public dataImg: string | null | undefined;
  public checkRole: string | null | undefined ;
  dataId: any  ;

  constructor(private showMessage:ShowMessage,
              private router:Router) { }

  ngOnInit(): void {
    this.getData();
    if (this.dataName!==null){
      console.log("da dang nhap")
      this.login = true
    }else {
      console.log("chua dang nhap")
      this.login = false;
      this.dataName == "Login"
    }
    this.checkRole = localStorage.getItem("role");
    if (this.dataImg == null){
    }
  }

  async logout(){
    await this.showMessage.alertLogout()
    this.router.navigate([""]).then(()=>{
      location.reload();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataName = localStorage.getItem("dataname")
  }

  checkDataImg(){
    if (this.dataImg==null){
      return false
    }else {
      return true
    }
  }


  getData(){
    this.dataName = localStorage.getItem("dataName");
    this.dataImg  = localStorage.getItem("dataImg");
    this.dataId =  localStorage.getItem("dataId");
  }
}
