import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVehiclePageRoutingModule } from './new-vehicle-routing.module';

import { NewVehiclePage } from './new-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewVehiclePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewVehiclePage]
})
export class NewVehiclePageModule {}
