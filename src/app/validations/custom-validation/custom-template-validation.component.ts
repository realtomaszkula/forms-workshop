import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-template-validation',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Custom Validation (Template)</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input
            matInput
            type="password"
            [(ngModel)]="value"
            #password="ngModel"
            [appPasswordStrength]="{ minLength: 8 }"
          />
          <mat-error *ngIf="password.invalid">
            Password must contain a small letter, a large letter, a number and a
            special character.
          </mat-error>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class CustomTemplateValidationComponent {
  value = '';
}
