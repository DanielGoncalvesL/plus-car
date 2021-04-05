import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcarPageRoutingModule } from './modalcar-routing.module';

import { ModalcarPage } from './modalcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcarPageRoutingModule
  ],
  declarations: [ModalcarPage],
  exports: [ModalcarPage]
})
export class ModalcarPageModule {}
