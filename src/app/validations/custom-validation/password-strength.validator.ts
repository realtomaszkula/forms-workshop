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

export function passwordStrength({
  minLength = 8
}: PasswordStrengthConfig = {}): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value || '';
    const validationResult = {};

    if (minLength && value.length < minLength) {
      validationResult['smallLetter'] = true;
    }
    if (!value.match('[a-z]+')) {
      validationResult['smallLetter'] = true;
    }
    if (!value.match('[A-Z]+')) {
      validationResult['capitalLetter'] = true;
    }
    if (!value.match('[0-9]+')) {
      validationResult['number'] = true;
    }
    if (!value.match('[-!?@#$%^&*()-+_=<>,.?;:|"\']+')) {
      validationResult['specialChar'] = true;
    }

    if (Object.keys(validationResult).length === 0) {
      return null;
    }
    return validationResult;
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
