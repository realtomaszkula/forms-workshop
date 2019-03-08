import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <app-reactive-forms-example
      (submitted)="onReactiveFormSubmit($event)"
    ></app-reactive-forms-example>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }

      app-reactive-forms-example,
      app-template-driven-forms-example {
        margin: 0 auto;
        display: block;
        max-width: 640px;
      }
    `
  ]
})
export class SimpleFormComponent {
  onReactiveFormSubmit(value: any) {
    console.log(`Reactive Form submitted with`, value);
  }

  onTemplateDrivenFormSubmit(value: any) {
    console.log(`Template Driven Form submitted with`, value);
  }
}
