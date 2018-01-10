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

  deleteUser(user:User):void{
    this.userService.deleteUser(user.username).subscribe(( response:string)=>
      this.users = this.users.filter(delUser => delUser!==user)
    ,(error:HttpErrorResponse)=>{
      this.error=error.error.message;
    });
   
  }

  ngOnInit() {
    this.getUsers();
  }

}
