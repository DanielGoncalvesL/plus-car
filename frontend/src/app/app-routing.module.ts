import {
  NgModule
} from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'vehicles/new-vehicle',
    loadChildren: () => import('./pages/vehicles/new-vehicle/new-vehicle.module').then(m => m.NewVehiclePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesPageModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./pages/despesas/despesa.module').then(m => m.DespesaPageModule)
  },

  {
    path: 'despesas/new-despesa',
    loadChildren: () => import('./pages/despesas/new-despesa/new-despesa.module').then(m => m.NewDespesaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'modalcar/:id',
    loadChildren: () => import('./pages/modalcar/modalcar.module').then( m => m.ModalcarPageModule)
  },
  {
    path: 'modaldespesa',
    loadChildren: () => import('./pages/modaldespesa/modaldespesa.module').then( m => m.ModaldespesaPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./pages/singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'sale-vehicles/:id',
    loadChildren: () => import('./pages/sale-vehicles/sale-vehicles.module').then( m => m.SaleVehiclesPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
