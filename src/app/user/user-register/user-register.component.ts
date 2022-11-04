import { Component, OnInit } from '@angular/core';
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";

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


  private selectedImage: any;
  private avatarDom: any;
  arrayPicture='';


  constructor(
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  submit() {


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
