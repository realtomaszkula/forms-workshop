import { AbstractControl } from '@angular/forms';

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
