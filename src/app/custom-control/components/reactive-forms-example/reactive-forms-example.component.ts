import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  template: `
    <mat-card>
      <mat-card-title>With Reactive Forms</mat-card-title>
      <mat-card-content>
        <app-switch-ctrl [formControl]="formControl"></app-switch-ctrl>
        <p>Value: {{ formControl.value }}</p>
        <p>Touched: {{ formControl.touched }}</p>
        <p>Dirty: {{ formControl.dirty }}</p>
        <button mat-stroked-button (click)="reset()">Reset</button>
        <button mat-stroked-button (click)="toggleDisabled()">
          {{ formControl.disabled ? 'Enable' : 'Disable' }}
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class ReactiveFormsExampleComponent {
  formControl = new FormControl();

  toggleDisabled() {
    this.formControl.disabled
      ? this.formControl.enable()
      : this.formControl.disable();
  }

  reset() {
    this.formControl.reset();
    this.formControl.markAsPristine();
  }
}
