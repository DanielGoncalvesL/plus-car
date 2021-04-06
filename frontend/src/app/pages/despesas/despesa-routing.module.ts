import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaPage } from './despesa.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaPage
  },
  {
    path: 'vehicle-expenses/:id',
    loadChildren: () => import('./vehicle-expenses/vehicle-expenses.module').then( m => m.VehicleExpensesPageModule)
  },
  {
    path: 'expense/:id',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaPageRoutingModule {}
