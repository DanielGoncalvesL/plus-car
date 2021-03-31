import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDespesaNormalPageRoutingModule } from './new-despesa-normal-routing.module';

import { NewDespesaNormalPage } from './new-despesa-normal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDespesaNormalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewDespesaNormalPage]
})
export class NewDespesaNormalPageModule {}
