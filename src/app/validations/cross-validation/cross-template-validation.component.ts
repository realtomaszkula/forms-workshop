import { Component } from '@angular/core';

@Component({
  selector: 'app-cross-template-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Cross Validation (Template)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form #form="ngForm" appPasswordsMatch>
          <mat-form-field appearance="outline">
            <mat-label>Password</mat-label>
            <input
              matInput
              [(ngModel)]="values.password"
              name="password"
              #password="ngModel"
              data-test="password"
            />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Password Confirm</mat-label>
            <input
              matInput
              [(ngModel)]="values.passwordConfirm"
              name="passwordConfirm"
              #passwordConfirm="ngModel"
              data-test="passwordConfirm"
            />
          </mat-form-field>
          <mat-error
            *ngIf="
              password.touched &&
              passwordConfirm.touched &&
              form.hasError('passwordMatch')
            "
            data-test="errors"
          >
            Passwords must match
          </mat-error>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class CrossTemplateValidationComponent {
  values = {
    password: '',
    passwordConfirm: ''
  };
}
