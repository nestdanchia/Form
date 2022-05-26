import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ListOtherConditionComponent } from './list-other-condition/list-other-condition.component';
import { TeamManagementComponent } from './empleados/team-management.component';
import { AngularMaterialModule } from '../material.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

//import {EmpleadosComponent } from './empleados/empleados.component';


@NgModule({
  declarations: [
    AboutComponent,
    ListOtherConditionComponent,
    TeamManagementComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    AngularMaterialModule,
    NgxIntlTelInputModule,
  ]
})
export class AboutModule { }
