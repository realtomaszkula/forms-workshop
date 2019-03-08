import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simple-form',
    pathMatch: 'full'
  },
  {
    path: 'simple-form',
    loadChildren: './simple-form/simple-form.module#SimpleFormModule'
  },
  {
    path: 'custom-control',
    loadChildren: './custom-control/custom-control.module#CustomControlModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
