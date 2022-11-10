import { Component, OnInit } from '@angular/core';
import {CvService} from "../../service/cv/cv.service";
import {UserService} from "../../service/user/user.service";

import {Cv} from "../../model/cv";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})

export class CvListComponent implements OnInit {
  cv: Cv[] | undefined;
  constructor(private cvService: CvService,
              private userService: UserService) { }
  userId:string | null = localStorage.getItem('dataId')

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.cvService.findCVByUserId(this.userId).subscribe((result: any) => {
      this.cv = result;
      // console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }


}
