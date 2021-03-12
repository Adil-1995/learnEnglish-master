import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NacionalidadesPageRoutingModule } from './nacionalidades-routing.module';

import { NacionalidadesPage } from './nacionalidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NacionalidadesPageRoutingModule
  ],
  declarations: [NacionalidadesPage]
})
export class NacionalidadesPageModule {}
