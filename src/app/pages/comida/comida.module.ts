import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaPageRoutingModule } from './comida-routing.module';

import { ComidaPage } from './comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaPageRoutingModule
  ],
  declarations: [ComidaPage]
})
export class ComidaPageModule {}
