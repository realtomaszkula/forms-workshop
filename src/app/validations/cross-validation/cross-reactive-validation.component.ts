import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { passwordMatchValidator } from './passwords-match.validator';

@Component({
  selector: 'app-cross-reactive-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Cross Validation (Reactive)</mat-card-title>
      </mat-card-header>
      <mat-card-content [formGroup]="form">
        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input matInput [formControl]="form.get('password')" />
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Password Confirm</mat-label>
          <input matInput [formControl]="form.get('passwordConfirm')" />
        </mat-form-field>
      </mat-card-content>
      <mat-error
        *ngIf="
          form.get('password').touched &&
          form.get('passwordConfirm').touched &&
          form.hasError('passwordMatch')
        "
      >
        Passwords must match
      </mat-error>
    </mat-card>
  `,
  styles: []
})
export class CrossReactiveValidationComponent {
  form = new FormGroup(
    {
      password: new FormControl(),
      passwordConfirm: new FormControl()
    },
    { validators: passwordMatchValidator }
  );
}
