import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {Company} from "../../model/company";
import {Account} from "../../model/account";
import {CompanyService} from "../../service/company/company.service";
import {AccountService} from "../../service/account/account.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  sub: Subscription | undefined;
  company: Company = {
    id: 0,
    name: "",
    image: "",
    address: "",
    staffNumber: 10,
    branch: "",
    linkMap: "",
    linkFb: "",
    status: true,
    account : {
      id: 0,
      userName: "",
      password: "",
    }
  };
  id: number | undefined;
  accountList: Account[] | undefined;
  companyId:string | null = localStorage.getItem('dataId')
  constructor(private companyService: CompanyService,
              private accountService: AccountService,
              private storage: AngularFireStorage,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

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

  ngOnInit(): void {
    this.getAllAccount()
    // this.getAllAccount();
    this.getCompany();
  }
  getCompany(){
    this.companyService.findById(this.companyId).
    subscribe(company =>{
      this.company = company;
    });
  }

   updateCompany(){
    this.companyService.editCompany(this.companyId, this.company).subscribe(()=>{
      this.getCompanyImg();
      alert('Success');
      console.log(this.company)
      this.router.navigate(['home']).then(() => {
        location.reload();
      });
    });
  }
  updateAccount() {
    this.company.image = this.arrayPicture;
    this.accountService.editAccount(this.company.account.id, this.company.account).subscribe(data => {
      console.log(this.company.image)
      this.company.account = data
      this.updateCompany()
    })
  }
  getAllAccount() {
    this.accountService.getAll().subscribe((result: any) => {
      this.accountList = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  getCompanyImg(){
    this.companyService.findById(localStorage.getItem("dataId")).subscribe(data =>{
      localStorage.setItem("dataImg",<string>data.image)
      console.log(data)
    })
  }
}
