import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from "../../service/company/company.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  walletForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    image: new FormControl(),
    address: new FormControl(),
    staffNumber: new FormControl(),
    branch: new FormControl(),
    linkMap: new FormControl(),
    linkFb: new FormControl(),

  });

  account:FormGroup= new FormGroup({
  id: new FormControl(),
  userName: new FormControl(),
  password: new FormControl(),
  appRole: new FormGroup({
  id: new FormControl(2),
})
})
  constructor(private companyService: CompanyService,
              private storage: AngularFireStorage) { }
  // title = 'FinanceManager-FE';
  @ViewChild('uploadFile',{static:true})
  public avatarDom:ElementRef|undefined;
  selectedImage:any =null;
  arrayPicture='';
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
  uploadFileImg(){
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectedImage);
    this.submitFile();
  }

  ngOnInit(): void {
  }
  submit(){
    const wallet=this.walletForm.value;
    wallet.image = this.arrayPicture
    console.log(this.arrayPicture)
    this.companyService.saveCompany(wallet).subscribe(()=>{
      this.walletForm.reset();
      alert('Tạo thành công ');
    })
  }

}
