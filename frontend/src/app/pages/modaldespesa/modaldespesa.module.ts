import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldespesaPageRoutingModule } from './modaldespesa-routing.module';

import { ModaldespesaPage } from './modaldespesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldespesaPageRoutingModule
  ],
  declarations: [ModaldespesaPage]
})
export class ModaldespesaPageModule {}
