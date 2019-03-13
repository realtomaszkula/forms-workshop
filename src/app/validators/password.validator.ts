import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function passwordComplexity(minimalLength: number): ValidatorFn {
  return (control: AbstractControl) => {
    return ValidatePasswordComplexity(control, minimalLength);
  };
}

export function ValidatePasswordComplexity(
  control: AbstractControl,
  minLen: number = 4
) {
  const value = control.value || '';

  const validationResult = {};

  if (value.trim().length < minLen) {
    validationResult['length'] = true;
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
}

export function passwordMatchValidator(group: FormGroup) {
  const password = group.get('password');
  const confirmPassword = group.get('passwordConfirm');
  if (password && confirmPassword && password.value === confirmPassword.value) {
    return null;
  }
  return { passwordMatch: true };
}
