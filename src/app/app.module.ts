import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { UsersComponent } from './users/users.component';
import { GlobalService } from './service/global.service';
import { BuildingService } from './service/building.service';
import { CeilingMaterialsComponent } from './multichoice-components/ceiling-materials/ceiling-materials.component';
import { ConstructionSystemsComponent } from './multichoice-components/construction-systems/construction-systems.component';
import { MaterialsComponent } from './multichoice-components/materials/materials.component';
import { PositionsComponent } from './multichoice-components/positions/positions.component';
import { PurposesComponent } from './multichoice-components/purposes/purposes.component';
import { RoofsComponent } from './multichoice-components/roofs/roofs.component';
import { SectorsComponent } from './multichoice-components/sectors/sectors.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    DashboardMenuComponent,
    BuildingsComponent,
    UsersComponent,
    CeilingMaterialsComponent,
    ConstructionSystemsComponent,
    MaterialsComponent,
    PositionsComponent,
    PurposesComponent,
    RoofsComponent,
    SectorsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, GlobalService, BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
