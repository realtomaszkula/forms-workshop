import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'custom-control',
    pathMatch: 'full'
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
