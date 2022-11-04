import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    image: new FormControl(),
    address: new FormControl(),
    staffNumber: new FormControl(),
    branch: new FormControl(),
    linkMap: new FormControl(),
    linkFb: new FormControl(),

  });

  constructor() { }

  ngOnInit(): void {
  }

  uploadFileImg() {

  }
}
