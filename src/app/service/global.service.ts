import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class GlobalService {

    constructor() { }

    private _user: User;
    private _password: string;

    public get password():string{
      let password = localStorage.getItem("password");
      this._password = password;
      return this._password
    }

    public set password(pass: string){
      this._password=pass;
    }

    public get user(): User {
        let user = JSON.parse(localStorage.getItem("user"));
        this._user = user;
        return this._user;
    }
    
    public set user(v: User) {
        this._user = v;
    }

    public isUserLoggedIn():boolean{
        return this.user!=null;
    }

    public logout():void{
        this.user=null;
        this.password=null;
        localStorage.removeItem("user");
        localStorage.removeItem("password");
    }

}