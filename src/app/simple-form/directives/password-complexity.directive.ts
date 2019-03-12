import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ValidatePasswordComplexity } from '../../validators/password.validator';

@Directive({
  selector: '[appPasswordComplexity]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordComplexityDirective,
      multi: true
    }
  ]
})
export class PasswordComplexityDirective implements Validator {
  @Input('appPasswordComplexity') minLen: number;

  validate(control: AbstractControl): ValidationErrors {
    return ValidatePasswordComplexity(control, this.minLen);
  }
}
