import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumeroComponent } from './numero.component';

const routes: Routes = [{ path: '', component: NumeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumeroRoutingModule { }
