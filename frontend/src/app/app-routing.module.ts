import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'vehicles/new-vehicle',
    loadChildren: () => import('./pages/vehicles/new-vehicle/new-vehicle.module').then( m => m.NewVehiclePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./pages/despesas/despesa.module').then( m => m.DespesaPageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }, 

  {
    path: 'despesas/new-despesa',
    loadChildren: () => import('./pages/despesas/new-despesa/new-despesa.module').then( m => m.NewDespesaPageModule)
  },
  {
    path: 'despesas/new-despesa-normal',
    loadChildren: () => import('./pages/despesas/new-despesa-normal/new-despesa-normal.module').then( m => m.NewDespesaNormalPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
