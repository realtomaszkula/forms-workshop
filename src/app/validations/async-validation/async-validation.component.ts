import { Component } from '@angular/core';

@Component({
  selector: 'app-async-validation',
  template: `
    <app-async-reactive-validation></app-async-reactive-validation>
    <app-async-template-validation></app-async-template-validation>
  `,
  styles: []
})
export class AsyncValidationComponent {}
