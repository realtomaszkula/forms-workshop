import { FormControl } from '@angular/forms';
import {
  PasswordsStrengthErrors,
  passwordStrength
} from './password-strength.validator';

describe('passwordComplexityValidator', () => {
  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  const validate = () =>
    passwordStrength({ minLength: 4 })(control) as PasswordsStrengthErrors;

  it('should validate minLength', () => {
    control.setValue('');
    expect(validate().minLength).toBeTruthy();
    control.setValue('1234');
    expect(validate().minLength).toBeFalsy();
  });

  it('should validate smallLetter', () => {
    control.setValue('L');
    expect(validate().smallLetter).toBeTruthy();
    control.setValue('l');
    expect(validate().smallLetter).toBeFalsy();
  });

  it('should validate capitalLetter', () => {
    control.setValue('l');
    expect(validate().capitalLetter).toBeTruthy();
    control.setValue('L');
    expect(validate().capitalLetter).toBeFalsy();
  });

  it('should validate number', () => {
    control.setValue('l');
    expect(validate().number).toBeTruthy();
    control.setValue('2');
    expect(validate().number).toBeFalsy();
  });

  it('should validate specialChar', () => {
    control.setValue('l');
    expect(validate().specialChar).toBeTruthy();
    control.setValue('#');
    expect(validate().specialChar).toBeFalsy();
  });
});
