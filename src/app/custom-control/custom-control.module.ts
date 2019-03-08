import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CustomControlComponent } from './components/custom-control/custom-control.component';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';
import { SwitchCtrlComponent } from './components/switch-ctrl/switch-ctrl.component';
import { TemplateDrivenFormsExampleComponent } from './components/template-driven-forms-example/template-driven-forms-example.component';
import { CustomControlRoutingModule } from './custom-control-routing.module';

@NgModule({
  declarations: [
    CustomControlComponent,
    SwitchCtrlComponent,
    ReactiveFormsExampleComponent,
    TemplateDrivenFormsExampleComponent
  ],
  imports: [
    CommonModule,
    CustomControlRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomControlModule {}
