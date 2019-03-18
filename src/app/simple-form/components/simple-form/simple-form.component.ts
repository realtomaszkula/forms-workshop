import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <app-reactive-forms-example
      (submitted)="onReactiveFormSubmit($event)"
    ></app-reactive-forms-example>
    <app-template-driven-forms-example
      (submitted)="onTemplateDrivenFormSubmit($event)"
    ></app-template-driven-forms-example>
  `
})
export class SimpleFormComponent {
  onReactiveFormSubmit(value: any) {
    console.log(`Reactive Form submitted with`, value);
  }

  onTemplateDrivenFormSubmit(value: any) {
    console.log(`Template Driven Form submitted with`, value);
  }
}
