import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Building } from '../model/building';
import { BuildingService} from '../service/building.service';
import { HttpErrorResponse } from '@angular/common/http';

 

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildings:Building[];
  error:string;

  constructor(private buildingService:BuildingService) {
   }

   getBuildings():void{
    this.error="";
    this.buildingService.getAllBuildings().subscribe((buildings => {
      this.buildings=buildings;
      console.log(buildings);
    }),
    (error: HttpErrorResponse)=>{
      this.error=error.error.message;
    });
   }

  ngOnInit() {
    this.getBuildings();
  }

}
