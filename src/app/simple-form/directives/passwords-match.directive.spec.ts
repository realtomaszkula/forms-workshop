import { PasswordsMatchDirective } from './passwords-match.directive';
import { FormGroup, FormControl } from '@angular/forms';

fdescribe('PasswordsMatchDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordsMatchDirective();
    expect(directive).toBeTruthy();
  });
  it('should return null when passwords match', () => {
    const form = new FormGroup({
      password: new FormControl('abc'),
      passwordConfirm: new FormControl('abc')
    });
    const directive = new PasswordsMatchDirective();
    const errors = directive.validate(form);
    expect(errors).toBeNull();
  });

  it('should return errors when passwords does not match', () => {
    const form = new FormGroup({
      password: new FormControl('abc'),
      passwordConfirm: new FormControl('ab')
    });
    const directive = new PasswordsMatchDirective();
    const errors = directive.validate(form);
    expect(errors).not.toBeNull();
    expect(errors.passwordMatch).toBeTruthy();
  });
});
