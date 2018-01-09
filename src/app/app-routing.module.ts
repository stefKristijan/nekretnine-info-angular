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


export const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {path:'login', component: LoginFormComponent},
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path:'dashboard/buildings', component: BuildingsComponent },
  { path:'dashboard/users', component: UsersComponent },
  { path:'dashboard/ceilings', component: CeilingMaterialsComponent},
  { path:'dashboard/construction-systems', component: ConstructionSystemsComponent},
  { path:'dashboard/materials', component: MaterialsComponent},
  { path:'dashboard/positions', component: PositionsComponent},
  { path:'dashboard/purposes', component: PurposesComponent},
  { path:'dashboard/roofs', component: RoofsComponent},
  { path:'dashboard/sectors', component: SectorsComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
