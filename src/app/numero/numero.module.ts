import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumeroRoutingModule } from './numero-routing.module';
import { NumeroComponent } from './numero.component';


@NgModule({
  declarations: [
    NumeroComponent
  ],
  imports: [
    CommonModule,
    NumeroRoutingModule
  ]
})
export class NumeroModule { }
