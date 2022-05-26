import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SafePipe } from '../safe.pipe';
// Angular extension might not work correctly because ngcc operation failed. Try to invoke ngcc manually by running 'npm/yarn run ngcc'. Please see the extension output for more information.
@NgModule({
  declarations: [
    SelectComponent,
    SafePipe 
  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    SelectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SelectModule { }
