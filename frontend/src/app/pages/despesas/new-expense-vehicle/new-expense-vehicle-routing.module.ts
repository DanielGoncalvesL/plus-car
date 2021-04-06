import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewExpenseVehiclePage } from './new-expense-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: NewExpenseVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewExpenseVehiclePageRoutingModule {}
