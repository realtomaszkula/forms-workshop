import { Component, EventEmitter, Output } from '@angular/core';

export interface FormValue {
  username: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-template-driven-forms-example',
  template: `
    <form
      #form="ngForm"
      (ngSubmit)="submitted.emit(form.value)"
      appPasswordsMatch
    >
      <mat-card>
        <mat-card-title>
          Login Form (Template Driven)
        </mat-card-title>
        <mat-form-field>
          <input
            matInput
            placeholder="Username"
            type="text"
            [(ngModel)]="model.username"
            name="username"
            #username="ngModel"
            required
            data-test="username-input"
          />
          <mat-error *ngIf="username.invalid" data-test="username-errors"
            >Username is required</mat-error
          >
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Password"
            type="password"
            [(ngModel)]="model.password"
            name="password"
            #password="ngModel"
            required
            appPasswordComplexity="8"
            data-test="password"
          />
          <mat-error *ngIf="password.invalid" data-test="password-errors">
            {{ errorMessage(password, 8) }}
          </mat-error>
        </mat-form-field>
        <mat-form-field>
          <input
            matInput
            placeholder="Confirm Password"
            type="password"
            [(ngModel)]="model.passwordConfirm"
            name="passwordConfirm"
            #passwordConfirm="ngModel"
            required
            data-test="password-confirm"
          />
          <mat-error
            *ngIf="password.invalid"
            data-test="password-confirm-errors"
            >Password Confirm is required</mat-error
          >
        </mat-form-field>
        <mat-error
          *ngIf="passwordConfirm.touched && form.hasError('passwordMatch')"
          >Entered passwords does not match
        </mat-error>
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
export class TemplateDrivenFormsExampleComponent {
  @Output() submitted = new EventEmitter<FormValue>();

  model: FormValue = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  errorMessage(control, minLen: number = 4) {
    if (control.hasError('required')) {
      return 'Password is required';
    }

    if (control.hasError('length')) {
      return `Password must be at least ${minLen} characters long`;
    }

    let msg = 'The password must have at least ';
    let comma = false;
    if (control.hasError('smallLetter')) {
      msg += 'one small letter';
      comma = true;
    }

    if (control.hasError('capitalLetter')) {
      msg += (comma ? ',' : '') + ' one capital letter';
      comma = true;
    }

    if (control.hasError('number')) {
      msg += (comma ? ',' : '') + ' one number';
      comma = true;
    }

    if (control.hasError('specialChar')) {
      msg += (comma ? ' and ' : '') + ' one special character';
      comma = true;
    }
    return comma ? msg : '';
  }
}
