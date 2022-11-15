import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {Company} from "../../model/company";
import {Cv} from "../../model/cv";
import {CompanyService} from "../../service/company/company.service";
import {AccountService} from "../../service/account/account.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CvService} from "../../service/cv/cv.service";
import {UserService} from "../../service/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {
  sub: Subscription | undefined;
  cv: Cv = {
    description: "",
    image: "",
    user : {
    }
  };
  cvId:string | null = localStorage.getItem('dataId')
  // private id: number | undefined;
  private id: number | undefined;

  constructor(private cvService: CvService,
              private userService: UserService,
              private storage: AngularFireStorage,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCv(this.id);
    })
  }
  getCv(id: number){
    this.cvService.findById(id).
    subscribe(cv =>{
      this.cv = cv;
    });
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
  updateCv(){
    this.cvService.findById(this.cv.id)
    this.cv.image = this.arrayPicture;
    console.log(this.cv.id)
    this.cvService.editCv(this.cv.id, this.cv).subscribe(()=>{
      console.log(this.cv.id)
      this.getCvImg();
      Swal.fire('Thành công');

      // this.router.navigate(['']).then(() => {
      //   location.reload();
      // });
    });
  }
  getCvImg() {
    this.cvService.findCVByUserIdAndStatus(localStorage.getItem("dataId")).subscribe(data =>{
      localStorage.setItem("dataImg",<string>data.image)
      console.log(data)
    })
  }
}
