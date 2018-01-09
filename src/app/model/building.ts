import {User} from '../model/user';
import { Purpose } from '../model/multichoice/purpose';
import { Material } from '../model/multichoice/material';
import { CeilingMaterial } from '../model/multichoice/ceiling-material';
import { ConstructionSystem } from '../model/multichoice/construction-system';
import { Position } from '../model/multichoice/position';
import { Roof } from '../model/multichoice/roof';
import { ImagePath } from '../model/image-path';
import { BuildingLocation } from '../model/building-location';



export class Building{
    id:number;
    uId:string;
    date:Date;
    yearOfBuild:String;
    user:User;
    purpose:Purpose;
    material:Material;
    ceilingMaterial:CeilingMaterial;
    constructionSystem:ConstructionSystem;
    roof:Roof;
    imagePaths:ImagePath[];
    synchronizedWithDatabase:boolean;
    locations:BuildingLocation[];
    position:Position;
    width:number;
    length:number;
    brutoArea:number;
    residentialBrutoArea:number;
    businessBrutoArea:number;
    basementBrutoArea:number;
    floorHeight:number;
    fullHeight:number;
    numberOfFloors:number;
    numberOfFlats:number;
    properGroundPlan:boolean;
    
}