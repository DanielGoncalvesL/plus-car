import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { ModalcarPage } from '../modalcar/modalcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclesPageRoutingModule
  ],
  declarations: [VehiclesPage, ModalcarPage],
  entryComponents: [ModalcarPage]
})
export class VehiclesPageModule {}
