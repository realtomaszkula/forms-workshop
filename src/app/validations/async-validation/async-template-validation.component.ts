import { Component } from '@angular/core';

@Component({
  selector: 'app-async-template-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Async Validation (Template)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline">
          <mat-label>Username</mat-label>
          <input
            matInput
            [(ngModel)]="value"
            [ngModelOptions]="{ updateOn: 'blur' }"
            #username="ngModel"
            appUniqueUsername
          />
          <mat-spinner
            *ngIf="username.touched && username.pending"
            matSuffix
            diameter="24"
          ></mat-spinner>
          <mat-error *ngIf="username.touched && username.invalid">
            Username is not unique
          </mat-error>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class AsyncTemplateValidationComponent {
  value = '';
}
