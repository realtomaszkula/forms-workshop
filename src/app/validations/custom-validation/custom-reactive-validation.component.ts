import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { passwordStrength } from './password-strength.validator';

@Component({
  selector: 'app-custom-reactive-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Custom Validation (Reactive)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input matInput [formControl]="ctrl" type="password" />
          <mat-error *ngIf="ctrl.invalid">
            Password must contain a small letter, a large letter, a number and a
            special character.
          </mat-error>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class CustomReactiveValidationComponent {
  ctrl = new FormControl('', {
    validators: passwordStrength({ minLength: 8 })
  });
}
