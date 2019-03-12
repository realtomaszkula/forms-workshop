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
import { TemplateDrivenFormsExampleComponent } from './components/template-driven-forms-example/template-driven-forms-example.component';
import { PasswordComplexityDirective } from '../simple-form/directives/password-complexity.directive';

@NgModule({
  declarations: [
    SimpleFormComponent,
    ReactiveFormsExampleComponent,
    TemplateDrivenFormsExampleComponent,
    PasswordComplexityDirective
  ],
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
