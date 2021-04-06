import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleVehiclesPage } from './sale-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: SaleVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleVehiclesPageRoutingModule {}
