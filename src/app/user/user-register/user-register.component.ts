import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {UserService} from "../../service/user/user.service";
import {Account} from "../../model/account";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    phoneNumber: new FormControl(),
    image: new FormControl(),
  });

  accountForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  })

  account?: Account;

  // title = 'FinanceManager-FE';
  @ViewChild('uploadFile', {static: true})
  public avatarDom: ElementRef | undefined;
  private selectedImage: any;
  arrayPicture='';


  constructor(private accountService:AccountService,
              private userService:UserService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  submit() {
    this.account ={
      userName: this.accountForm?.value.userName,
      password: this.accountForm?.value.password,
      appRole: [],
    }
    this.accountService.saveAccount(this.account).subscribe(data =>{
      const user = this.userForm.value;
      user.account = data;
      user.image = this.arrayPicture;
      this.userService.saveUser(user).subscribe( data =>{
        alert("ok babe")
      })
    })

  }

  uploadFileImg(){
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectedImage);
    this.submitFile();
  }


  submitFile(){
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      console.log("fp", filePath)
      console.log("fr", fileRef)
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(()=>(fileRef.getDownloadURL().subscribe(url=>{
          this.arrayPicture = url;
          console.log(url)
        })))
      ).subscribe();
    }
  }




}
