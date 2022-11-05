import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {UserService} from "../../service/user/user.service";
import {Account} from "../../model/account";
import {Router} from "@angular/router";
import {ShowMessage} from "../../commom/show-message";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  passwordChek:string= '';
  confirmpassword:string = '';

  checkConfirmPassword(){
    if (this.passwordChek == this.confirmpassword){
      return true
    }else {
      return false
    }

  }
  data: any = {
    password: '',
    confirmpassword: ''
  };

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl(),
    image: new FormControl('', Validators.required),
  });

  accountForm: FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),

  })

  account?: Account;

  // title = 'FinanceManager-FE';
  @ViewChild('uploadFile', {static: true})
  public avatarDom: ElementRef | undefined;
  private selectedImage: any;
  arrayPicture='';

  ngOnInit(): void {
  }

  constructor(private accountService:AccountService,
              private userService:UserService,
              private storage: AngularFireStorage,
              private showMessage:ShowMessage,
              private router:Router) { }

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
        this.showMessage.alertRegisterSuccess()
        // this.router.navigate("home")

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

  get email() {
    return this.accountForm.get('userName');
  }

  get password() {
    return this.accountForm.get('password');
  }

  get passwordCheck() {
    return this.data.password;
  }

  get name() {
    return this.userForm.get('name');
  }
  get image() {
    return this.userForm.get('image');
  }

  // get confirmpassword(){
  //   return this.data.confirmpassword;
  // }


}
