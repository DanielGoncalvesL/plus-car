import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDespesaPageRoutingModule } from './new-despesa-routing.module';

import { NewDespesaPage } from './new-despesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDespesaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewDespesaPage]
})
export class NewDespesaPageModule {}
