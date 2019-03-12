import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ValidatePasswordComplexity,
  passwordComplexity
} from 'src/app/validators/password.validator';

export interface FormValue {
  username: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-reactive-forms-example',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitted.emit(form.value)">
      <mat-card>
        <mat-card-title>
          Login Form (Reactive)
        </mat-card-title>
        <mat-form-field>
          <input
            matInput
            placeholder="Username"
            type="text"
            formControlName="username"
            data-test="username-input"
          />
          <mat-error
            *ngIf="form.get('username').hasError('required')"
            data-test="username-errors"
            >Username is required</mat-error
          >
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Password"
            type="password"
            formControlName="password"
            data-test="password"
          />
          <mat-error
            *ngIf="form.get('password').hasError('required')"
            data-test="password-errors"
            >Password is required
          </mat-error>
          <mat-error *ngIf="hasDetailedError()" data-test="password-errors">{{
            detailedErrorMessage()
          }}</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Confirm Password"
            type="password"
            formControlName="passwordConfirm"
            data-test="password-confirm"
          />
          <mat-error
            *ngIf="form.get('passwordConfirm').hasError('required')"
            data-test="password-confirm-errors"
            >Password Confirm is required</mat-error
          >
        </mat-form-field>

        <mat-card-content>
          <pre>{{ form.value | json }}</pre>
        </mat-card-content>
        <mat-card-actions align="end">
          <button
            mat-button
            type="button"
            color="primary"
            (click)="form.reset()"
            data-test="reset-button"
          >
            Reset
          </button>
          <button
            mat-raised-button
            color="primary"
            [disabled]="!form.valid"
            data-test="submit-button"
          >
            Submit
          </button>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styles: [
    `
      .mat-form-field {
        display: block;
      }

      pre {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 16px;
      }
    `
  ]
})
export class ReactiveFormsExampleComponent {
  @Output() submitted = new EventEmitter<FormValue>();
  minPassLen = 8;

  form = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', {
      validators: [Validators.required, passwordComplexity(this.minPassLen)]
    }),
    passwordConfirm: new FormControl('', { validators: [Validators.required] })
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.submitted.emit(this.form.value);
  }

  hasDetailedError(): boolean {
    const errors = this.form.get('password').errors;
    if (!errors || (!errors.required && errors.length)) {
      return true;
    }

    return (
      errors.smallLetter ||
      errors.capitalLetter ||
      errors.number ||
      errors.specialChar
    );
  }

  detailedErrorMessage(): string {
    const errors = this.form.get('password').errors;

    if (!errors || errors.required) {
      return '';
    }

    if (errors.length) {
      return `Password must be at least ${this.minPassLen} characters long.`;
    }

    let msg = 'The password must have at least ';
    let comma = false;
    if (errors.smallLetter) {
      msg += 'one small letter';
      comma = true;
    }

    if (errors.capitalLetter) {
      msg += (comma ? ',' : '') + ' one capital letter';
      comma = true;
    }

    if (errors.number) {
      msg += (comma ? ',' : '') + ' one number';
      comma = true;
    }

    if (errors.specialChar) {
      msg += (comma ? ' and ' : '') + ' one special character';
      comma = true;
    }
    return comma ? msg : '';
  }
}
