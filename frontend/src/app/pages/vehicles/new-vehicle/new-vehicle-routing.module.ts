import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVehiclePage } from './new-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: NewVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewVehiclePageRoutingModule {}
