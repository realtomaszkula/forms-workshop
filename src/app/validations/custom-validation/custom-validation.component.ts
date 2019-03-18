import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-validation',
  template: `
    <app-custom-reactive-validation></app-custom-reactive-validation>
    <app-custom-template-validation></app-custom-template-validation>
  `,
  styles: []
})
export class CustomValidationComponent {}
