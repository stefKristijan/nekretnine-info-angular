import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { LoginFormComponent } from '../app/login-form/login-form.component';
import { BuildingsComponent } from '../app/buildings/buildings.component';
import { UsersComponent } from '../app/users/users.component';
import { CeilingMaterialsComponent } from '../app/multichoice-components/ceiling-materials/ceiling-materials.component';
import { ConstructionSystemsComponent } from '../app/multichoice-components/construction-systems/construction-systems.component';
import { MaterialsComponent } from '../app/multichoice-components/materials/materials.component';
import { PositionsComponent } from '../app/multichoice-components/positions/positions.component';
import { PurposesComponent } from '../app/multichoice-components/purposes/purposes.component';
import { RoofsComponent } from '../app/multichoice-components/roofs/roofs.component';
import { SectorsComponent } from '../app/multichoice-components/sectors/sectors.component';
import { AuthenticationGuard } from '../app/authentication.guard';
import { UserDetailComponent } from '../app/user-detail/user-detail.component';
import { BuildingDetailComponent } from '../app/building-detail/building-detail.component';

export const routes: Routes = [
  {
    path:'dashboard',
    canActivate:[AuthenticationGuard],
    component: DashboardComponent,
  },
  {path:'login', component: LoginFormComponent},
  { path: '', redirectTo:'dashboard',  pathMatch: 'full' },
  { 
    path:'buildings',
    component: BuildingsComponent,
    children:[
      { path:':id', component:BuildingDetailComponent}
    ] 
  },
  { 
    path:'users', 
    component: UsersComponent,
    children:[
      { 
        path:':username', 
        component:UserDetailComponent, 
        children:[
          { path:'buildings', component:BuildingsComponent}
        ]
      }
    ] 
  },
  { path:'ceilings', component: CeilingMaterialsComponent},
  { path:'construction-systems', component: ConstructionSystemsComponent},
  { path:'materials', component: MaterialsComponent},
  { path:'positions', component: PositionsComponent},
  { path:'purposes', component: PurposesComponent},
  { path:'roofs', component: RoofsComponent},
  { path:'sectors', component: SectorsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
