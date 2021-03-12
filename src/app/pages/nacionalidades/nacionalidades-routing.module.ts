import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NacionalidadesPage } from './nacionalidades.page';

const routes: Routes = [
  {
    path: '',
    component: NacionalidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NacionalidadesPageRoutingModule {}
