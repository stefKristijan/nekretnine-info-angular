import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public error: string =""
  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    this.error="";
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((response:User)=>{
        this.router.navigateByUrl("dashboard")
        localStorage.setItem("password",this.loginForm.value.password);
      },(error: HttpErrorResponse)=>{
        this.error=error.error.message;
      })
  }

}
