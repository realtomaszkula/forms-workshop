import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';

export interface PasswordStrengthConfig {
  minLength?: number;
}

export interface PasswordsStrengthErrors {
  minLength: boolean;
  smallLetter: boolean;
  capitalLetter: boolean;
  number: boolean;
  specialChar: boolean;
}

export function passwordStrength({
  minLength = 8
}: PasswordStrengthConfig = {}): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value || '';
    const errors: Partial<PasswordsStrengthErrors> = {};

    if (minLength && value.length < minLength) {
      errors.minLength = true;
    }
    if (!value.match('[a-z]+')) {
      errors.smallLetter = true;
    }
    if (!value.match('[A-Z]+')) {
      errors.capitalLetter = true;
    }
    if (!value.match('[0-9]+')) {
      errors.number = true;
    }
    if (!value.match('[-!?@#$%^&*()-+_=<>,.?;:|"\']+')) {
      errors.specialChar = true;
    }

    return Object.keys(errors).length ? errors : null;
  };
}

@Directive({
  selector: '[appPasswordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidationDirective,
      multi: true
    }
  ]
})
export class PasswordStrengthValidationDirective implements Validator {
  @Input('appPasswordStrength') config: PasswordStrengthConfig;

  validate(control: AbstractControl): ValidationErrors {
    return passwordStrength(this.config)(control);
  }
}
