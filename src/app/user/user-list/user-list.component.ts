import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User[] | undefined ;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((result: any) => {
      this.user = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

}
