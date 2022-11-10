import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Account} from "../../model/account";
import {AppRole} from "../../model/dto/app-role";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AccountService} from "../../service/account/account.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";

import {finalize} from "rxjs";

import {JobField} from "../../model/job-field";
import {CvService} from "../../service/cv/cv.service";
import {UserService} from "../../service/user/user.service";
import {JobService} from "../../service/job/job.service";
import {User} from "../../model/user";
import {Job} from "../../model/job";
import {JobFieldService} from "../../service/jobField/job-field.service";
import {Cv} from "../../model/cv";

@Component({
  selector: 'app-cv-create',
  templateUrl: './cv-create.component.html',
  styleUrls: ['./cv-create.component.css']
})
export class CvCreateComponent implements OnInit {
  cvForm: FormGroup = new FormGroup({
    id: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
  });

  userId:string | null = localStorage.getItem('dataId')


  // job?:Job = new class implements Job {
  //   id: number = 1;
  // }
  constructor(private cvService: CvService,
              private userService: UserService,
              private jobService: JobService,
              private storage: AngularFireStorage,
              ) { }

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

    const cv = this.cvForm.value;
    cv.image = this.arrayPicture;

    console.log(this.userId)
    const a:Cv = {
      id: this.cvForm?.value.id,
      description: this.cvForm?.value.description,
      status: this.cvForm?.value.status,
      image: this.arrayPicture,
      user: {
        id:this.userId
      }
    }
    console.log(a)
    this.cvService.saveCv(a).subscribe(data => {
      alert('success');
      this.cvForm.reset();
    });
  }
  get image() {
    return this.cvForm.get('image');
  }
  get description() {
    return this.cvForm.get('description');
  }

}
