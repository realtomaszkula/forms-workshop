import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidationComponent } from './async-validation/async-validation.component';
import { CrossValidationComponent } from './cross-validation/cross-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

const routes: Routes = [
  { path: 'custom', component: CustomValidationComponent },
  { path: 'cross', component: CrossValidationComponent },
  { path: 'async', component: AsyncValidationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationsRoutingModule {}
