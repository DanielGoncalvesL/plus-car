import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensePage } from './expense.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensePageRoutingModule {}
