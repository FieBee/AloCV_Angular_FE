import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Cv} from "../../model/cv";
import {CvService} from "../../service/cv/cv.service";
import {UserService} from "../../service/user/user.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cv-delete',
  templateUrl: './cv-delete.component.html',
  styleUrls: ['./cv-delete.component.css']
})
export class CvDeleteComponent implements OnInit {
  sub: Subscription | undefined;
  cv: Cv = {
    description: "",
    image: "",
    user : {
    }
  };
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
    this.deleteCv()
  }
  deleteCv() {
    console.log(this.id)
    this.cvService.deleteByStatus(this.id).subscribe(() => {
      Swal.fire('Khoá CV thành công!');
      this.router.navigate(['/user/list-cv']);
    }, e => {
      console.log(e);
    });
  }

}
