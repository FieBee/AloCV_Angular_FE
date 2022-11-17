import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Cv} from "../../model/cv";
import {Subscription} from "rxjs";
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/user";
import {CvService} from "../../service/cv/cv.service";
import {JobService} from "../../service/job/job.service";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  private sub: Subscription;

  constructor(private jobService: JobService,
              private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cvService: CvService
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.userID = +paramMap.get('id');
      this.getUserById(this.userID);
      console.log(this.userID)
    })
  }

  userID:number|undefined;
  users:User={}
  cvs: Cv[]|undefined;

  ngOnInit(): void {
    this.getCvByJobId();
  }

  getUserById(userID: number){
    this.userService.findById(userID).
    subscribe(user =>{
      this.users = user;
    });
  }

  getCvByJobId(){
    this.cvService.findCVByUserId(this.userID).subscribe((data: any)=>{
      this.cvs = data;
      console.log(data)
    })
  }

}
