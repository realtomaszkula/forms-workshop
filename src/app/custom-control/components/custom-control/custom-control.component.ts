import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-control',
  template: `
    <app-reactive-forms-example></app-reactive-forms-example>
    <app-template-driven-forms-example></app-template-driven-forms-example>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }

      app-reactive-forms-example,
      app-template-driven-forms-example {
        display: block;
        max-width: 640px;
        margin: 0 auto;
        margin-bottom: 16px;
      }
    `
  ]
})
export class CustomControlComponent {}
