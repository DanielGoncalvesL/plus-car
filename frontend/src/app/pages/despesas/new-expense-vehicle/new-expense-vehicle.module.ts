import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExpenseVehiclePageRoutingModule } from './new-expense-vehicle-routing.module';

import { NewExpenseVehiclePage } from './new-expense-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewExpenseVehiclePageRoutingModule
  ],
  declarations: [NewExpenseVehiclePage]
})
export class NewExpenseVehiclePageModule {}
