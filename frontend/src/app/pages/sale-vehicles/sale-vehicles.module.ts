import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleVehiclesPageRoutingModule } from './sale-vehicles-routing.module';

import { SaleVehiclesPage } from './sale-vehicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleVehiclesPageRoutingModule
  ],
  declarations: [SaleVehiclesPage]
})
export class SaleVehiclesPageModule {}
