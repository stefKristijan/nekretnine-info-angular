import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  error:string;

  constructor(private userService:UserService) { }

  getUsers():void{
    this.error="";
    this.userService.getUsers().subscribe((users => this.users=users),
    (error: HttpErrorResponse)=>{
      this.error=error.error.message;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
