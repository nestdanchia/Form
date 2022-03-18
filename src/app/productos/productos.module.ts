import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
