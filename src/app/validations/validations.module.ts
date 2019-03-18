import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AsyncReactiveValidationComponent } from './async-validation/async-reactive-validation.component';
import { AsyncTemplateValidationComponent } from './async-validation/async-template-validation.component';
import { AsyncValidationComponent } from './async-validation/async-validation.component';
import { UniqueUsernameValidationDirective } from './async-validation/username-unique.validator';
import { CrossReactiveValidationComponent } from './cross-validation/cross-reactive-validation.component';
import { CrossTemplateValidationComponent } from './cross-validation/cross-template-validation.component';
import { CrossValidationComponent } from './cross-validation/cross-validation.component';
import { PasswordsMatchValidatorDirective } from './cross-validation/passwords-match.validator';
import { CustomReactiveValidationComponent } from './custom-validation/custom-reactive-validation.component';
import { CustomTemplateValidationComponent } from './custom-validation/custom-template-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { PasswordStrengthValidationDirective } from './custom-validation/password-strength.validator';
import { ValidationsRoutingModule } from './validations-routing.module';

@NgModule({
  declarations: [
    CustomValidationComponent,
    CrossValidationComponent,
    AsyncValidationComponent,
    CustomReactiveValidationComponent,
    CustomTemplateValidationComponent,
    CrossReactiveValidationComponent,
    CrossTemplateValidationComponent,
    AsyncReactiveValidationComponent,
    AsyncTemplateValidationComponent,
    PasswordStrengthValidationDirective,
    PasswordsMatchValidatorDirective,
    UniqueUsernameValidationDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ]
})
export class ValidationsModule {}
