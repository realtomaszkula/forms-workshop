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
          Login Form (Template)
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
            appUniqueName
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
            data-test="password"
          />
          <mat-error *ngIf="password.invalid" data-test="password-errors">
            Password is required
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
            *ngIf="passwordConfirm.invalid"
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
export class TemplateDrivenFormsExampleComponent {
  @Output() submitted = new EventEmitter<FormValue>();

  model: FormValue = {
    username: '',
    password: '',
    passwordConfirm: ''
  };
}
