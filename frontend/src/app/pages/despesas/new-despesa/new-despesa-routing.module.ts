import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDespesaPage } from './new-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: NewDespesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDespesaPageRoutingModule {}
