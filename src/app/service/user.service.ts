import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators';
import {FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { GlobalService } from '../service/global.service';


@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/login';
  private usersUrl = 'http://localhost:8080/admin/users';
  private deleteUrl = 'http://localhost:8080/users/'

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }


  login(username:string, password:string):Observable<User>{
    console.log(username+" "+password);
    let formData = new FormData();
    formData.append("username",username);
    formData.append("password",password);
    return this.http
        .post(this.userUrl, formData)
        .map((response: User) => {
          this.globalService.user=response;
          this.globalService.password=password;
          localStorage.setItem("user", JSON.stringify(response));
          localStorage.setItem("password", password);
          return response;
        })
  }

  getUsers():Observable<User[]>{
    let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Basic '+btoa(this.globalService.user.username+":"+this.globalService.password) })
 };
    return this.http.get<User[]>(this.usersUrl, httpOptions);
  }

  deleteUser(username:string):Observable<any>{
    let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Basic '+btoa(this.globalService.user.username+":"+this.globalService.password) })
 };
    this.deleteUrl+=username;
    console.log(this.deleteUrl);
    return this.http.delete(this.deleteUrl, httpOptions);
  }

}
