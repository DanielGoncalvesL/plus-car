import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleExpensesPageRoutingModule } from './vehicle-expenses-routing.module';

import { VehicleExpensesPage } from './vehicle-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleExpensesPageRoutingModule
  ],
  declarations: [VehicleExpensesPage]
})
export class VehicleExpensesPageModule {}
