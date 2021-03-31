import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDespesaNormalPage } from './new-despesa-normal.page';

const routes: Routes = [
  {
    path: '',
    component: NewDespesaNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDespesaNormalPageRoutingModule {}
