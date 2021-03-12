import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then( m => m.ViajarPageModule)
  },
  {
    path: 'comida',
    loadChildren: () => import('./pages/comida/comida.module').then( m => m.ComidaPageModule)
  },
  {
    path: 'informatica',
    loadChildren: () => import('./pages/informatica/informatica.module').then( m => m.InformaticaPageModule)
  },
  {
    path: 'nacionalidades',
    loadChildren: () => import('./pages/nacionalidades/nacionalidades.module').then( m => m.NacionalidadesPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./examen/examen.module').then( m => m.ExamenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
