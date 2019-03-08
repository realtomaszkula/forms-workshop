import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleFormRoutingModule } from './simple-form-routing.module';

@NgModule({
  declarations: [SimpleFormComponent, ReactiveFormsExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SimpleFormModule {}
