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
import { Building } from '../model/building';

@Injectable()
export class BuildingService {

  private allBuildingsUrl = 'http://localhost:8080/admin/buildings';

  constructor(
    private http:HttpClient,
    private globalService:GlobalService
  ) { }

  getAllBuildings():Observable<Building[]>{
    let header = new HttpHeaders();
    const body=JSON.stringify({username: this.globalService.user.username, password:this.globalService.password});
    header = header.append("Authorization","Basic "+btoa(this.globalService.user.username+":"+this.globalService.password));
    return this.http.get<Building[]>(this.allBuildingsUrl, {headers:header});
  }

}
