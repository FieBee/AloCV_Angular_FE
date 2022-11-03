import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectImage:any = null;
  // imgSrc: string | undefined;
  title = 'demo-upload';
  arrayPicture = '';
  @ViewChild('uploadFile',{static: true}) public avatarDom: ElementRef | undefined;
  constructor(private storage: AngularFireStorage
  ) {
  }
  ngOnInit(){

  }
  submit(){
    if (this.selectImage != null) {
      const filePath = this.selectImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectImage).snapshotChanges().pipe(
        finalize(()=>(fileRef.getDownloadURL().subscribe(url=>{
          this.arrayPicture = url;
          console.log(url)
        })))
      ).subscribe();
    }
  }
  uploadFileImg(){
    this.selectImage = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }

}
