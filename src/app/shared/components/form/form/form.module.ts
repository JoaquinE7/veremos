import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  exports:[FormComponent]
})
export class FormModule { }
