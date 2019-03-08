import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomControlComponent } from './components/custom-control/custom-control.component';

const routes: Routes = [{ path: '', component: CustomControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomControlRoutingModule {}
