import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../service/company/company.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {AccountService} from "../../service/account/account.service";
import {Account} from "../../model/account";
import {ShowMessage} from "../../commom/show-message";

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  passwordChek:string= '';
  confirmpassword:string = '';

  checkConfirmPassword(){
    if (this.passwordChek == this.confirmpassword){
      return true
    }else {
      return false
    }

  }
  a?: Account

  walletForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    address: new FormControl(),
    staffNumber: new FormControl(),
    branch: new FormControl(),
    linkMap: new FormControl(),
    linkFb: new FormControl(),
    account: new FormControl

  });
  accountForm: FormGroup = new FormGroup({
    id: new FormControl(),
    userName: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
  })

  constructor(private companyService: CompanyService,
              private accountService: AccountService,
              private storage: AngularFireStorage,
              private showMessage:ShowMessage) {
  }


  ngOnInit(): void {
  }

  // title = 'FinanceManager-FE';
  @ViewChild('uploadFile', {static: true})
  public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture = '';

  submitFile() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      console.log("fp", filePath)
      console.log("fr", fileRef)
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url;
          console.log(url)
        })))
      ).subscribe();
    }
  }

  uploadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectedImage);
    this.submitFile();
  }


  submit() {
    this.a = {
      id: this.accountForm?.value.id,
      userName: this.accountForm?.value.userName,
      password: this.accountForm?.value.password,
      appRole: [],
    }
    this.accountService.saveAccount(this.a).subscribe(data => {
      console.log(data);
      const wallet = this.walletForm.value;
      wallet.account = data;
      wallet.image = this.arrayPicture;
      console.log(this.arrayPicture);
      console.log(wallet)
      this.companyService.saveCompany(wallet).subscribe(data1 => {
        this.walletForm.reset();
        this.showMessage.alertRegisterSuccess()
      })
    })

  }
  get email() {
    return this.accountForm.get('userName');
  }

  get password() {
    return this.accountForm.get('password');
  }

  get name() {
    return this.walletForm.get('name');
  }
  get image() {
    return this.walletForm.get('image');
  }

}

