import { FormControl, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from './passwords-match.validator';

describe('passwordsMatchValidator', () => {
  it('should validate', () => {
    const form = new FormGroup(
      {
        password: new FormControl(),
        passwordConfirm: new FormControl()
      },
      { validators: [passwordMatchValidator] }
    );

    form.get('password').setValue('a');
    form.get('passwordConfirm').setValue('a');
    expect(form.valid).toBe(true);

    form.get('password').setValue('b');
    form.get('passwordConfirm').setValue('a');
    expect(form.valid).toBe(false);

    form.get('password').setValue('a');
    form.get('passwordConfirm').setValue('b');
    expect(form.valid).toBe(false);
  });
});
