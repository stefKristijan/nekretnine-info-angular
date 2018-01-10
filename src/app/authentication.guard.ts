import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './service/global.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor (private globalService:GlobalService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.globalService.isUserLoggedIn()){
        return true;
      }  else{
        this.router.navigate(['/login']);
      } 
      return false;
  }
}
