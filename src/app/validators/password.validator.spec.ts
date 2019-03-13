import {
  ValidatePasswordComplexity,
  passwordMatchValidator
} from './password.validator';
import { FormControl, FormGroup } from '@angular/forms';

fdescribe('passwordComplexityValidator', () => {
  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  it('should validate length', () => {
    control.setValue('123');
    let errors = ValidatePasswordComplexity(control, 4) as any;
    expect(errors.length).toBeTruthy();

    control.setValue('123a');
    errors = ValidatePasswordComplexity(control, 4) as any;
    expect(errors.length).toBeFalsy();
  });

  it('should validate smallLetter', () => {
    control.setValue('ABCD12#');
    let errors = ValidatePasswordComplexity(control, 4) as any;

    expect(errors).toBeTruthy();
    expect(errors.smallLetter).toBeTruthy();

    control.setValue('a');
    errors = ValidatePasswordComplexity(control, 4) as any;

    expect(errors).toBeTruthy();
    expect(errors.smallLetter).toBeFalsy();
  });

  it('should validate capitalLetter', () => {
    control.setValue('abc2@');
    let errors = ValidatePasswordComplexity(control, 4) as any;

    expect(errors).toBeTruthy();
    expect(errors.capitalLetter).toBeTruthy();

    control.setValue('A');
    errors = ValidatePasswordComplexity(control, 4) as any;

    expect(errors).toBeTruthy();
    expect(errors.capitalLetter).toBeFalsy();
  });

  it('should validate numbers', () => {
    control.setValue('aAbB!');
    let errors = ValidatePasswordComplexity(control, 4) as any;
    expect(errors).toBeTruthy();
    expect(errors.number).toBeTruthy();

    for (let i = 0; i < 10; i++) {
      control.setValue(`${i}`);
      errors = ValidatePasswordComplexity(control, 4) as any;
      expect(errors).toBeTruthy();
      expect(errors.number).toBeFalsy();
    }
  });

  it('should validate special chars', () => {
    const defaultPass = 'aAbB1';
    control.setValue(defaultPass);
    let errors = ValidatePasswordComplexity(control, 4) as any;
    expect(errors).toBeTruthy();
    expect(errors.specialChar).toBeTruthy();

    const allowedChars = '!?@#$%^&*()-+_=<>,.?;:|"\'';

    for (let i = 0; i < allowedChars.length - 1; i++) {
      const w = allowedChars.charAt(i);
      control.setValue(w);
      errors = ValidatePasswordComplexity(control, 4) as any;
      expect(errors.specialChar).toBeFalsy(`failed for character: ${w}`);
    }
  });
});

fdescribe('passwords match validator', () => {
  let password: FormControl;
  let passwordConfirm: FormControl;

  let form: FormGroup;

  beforeEach(() => {
    password = new FormControl('abc');
    passwordConfirm = new FormControl();

    form = new FormGroup(
      {
        password: password,
        passwordConfirm: passwordConfirm
      },
      { validators: [passwordMatchValidator] }
    );
  });

  it('should return error when passwordConfirm does not match password', () => {
    passwordConfirm.setValue('ab');
    const errors = passwordMatchValidator(form);
    expect(errors.passwordMatch).toBeTruthy(`passwords shaould not match!`);
  });

  it('should return null when passwordConfirm not match password', () => {
    passwordConfirm.setValue('abc');
    const errors = passwordMatchValidator(form);
    expect(errors).toBeFalsy(`passwords shaould match!`);
  });
});
