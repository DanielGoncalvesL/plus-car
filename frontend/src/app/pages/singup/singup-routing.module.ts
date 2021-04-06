import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupPage } from './singup.page';

const routes: Routes = [
  {
    path: '',
    component: SingupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupPageRoutingModule {}
