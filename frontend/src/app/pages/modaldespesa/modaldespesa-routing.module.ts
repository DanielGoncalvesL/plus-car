import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldespesaPage } from './modaldespesa.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldespesaPageRoutingModule {}
