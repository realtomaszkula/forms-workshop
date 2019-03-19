import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UniqueUsernameValidator } from './username-unique.validator';

@Component({
  selector: 'app-async-reactive-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Async Validation (Reactive)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline">
          <mat-label>Username</mat-label>
          <input matInput [formControl]="ctrl" />
          <mat-spinner
            *ngIf="ctrl.touched && ctrl.pending"
            matSuffix
            diameter="24"
            data-test="spinner"
          ></mat-spinner>
          <mat-error *ngIf="ctrl.touched && ctrl.invalid">
            Username is not unique
          </mat-error>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class AsyncReactiveValidationComponent {
  ctrl = new FormControl('', {
    asyncValidators: [this.validator.validate.bind(this.validator)],
    updateOn: 'blur'
  });

  constructor(private validator: UniqueUsernameValidator) {}
}
