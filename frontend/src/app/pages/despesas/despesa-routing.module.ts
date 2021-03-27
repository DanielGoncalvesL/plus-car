import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaPage } from './despesa.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaPageRoutingModule {}
