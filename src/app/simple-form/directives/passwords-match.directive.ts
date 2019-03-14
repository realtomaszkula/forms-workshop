import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password.validator';

@Directive({
  selector: '[appPasswordsMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordsMatchDirective,
      multi: true
    }
  ]
})
export class PasswordsMatchDirective implements Validator {
  validate(group: FormGroup) {
    return passwordMatchValidator(group);
  }

  constructor() {}
}
