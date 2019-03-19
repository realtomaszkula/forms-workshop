import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appPasswordsMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordsMatchValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordsMatchValidatorDirective implements Validator {
  validate(group: FormGroup) {
    return passwordMatchValidator(group);
  }
}

export function passwordMatchValidator(group: AbstractControl) {
  const password = group.get('password');
  const confirmPassword = group.get('passwordConfirm');

  return password && confirmPassword && password.value === confirmPassword.value
    ? null
    : { passwordMatch: true };
}
