import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleExpensesPage } from './vehicle-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleExpensesPageRoutingModule {}
