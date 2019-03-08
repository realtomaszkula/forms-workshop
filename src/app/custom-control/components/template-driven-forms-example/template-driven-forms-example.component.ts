import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-example',
  template: `
    <mat-card>
      <mat-card-title>With Template Driven Forms</mat-card-title>
      <mat-card-content>
        <app-switch-ctrl
          [(ngModel)]="value"
          [disabled]="isDisabled"
          #ngModel="ngModel"
        ></app-switch-ctrl>

        <p>Value: {{ ngModel.control.value }}</p>
        <p>Touched: {{ ngModel.control.touched }}</p>
        <p>Dirty: {{ ngModel.control.dirty }}</p>

        <button
          mat-stroked-button
          (click)="ngModel.control.reset(); ngModel.control.markAsPristine()"
        >
          Reset
        </button>
        <button mat-stroked-button (click)="isDisabled = !isDisabled">
          {{ ngModel.control.disabled ? 'Enable' : 'Disable' }}
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class TemplateDrivenFormsExampleComponent {
  value?: boolean;
  isDisabled = false;
}
