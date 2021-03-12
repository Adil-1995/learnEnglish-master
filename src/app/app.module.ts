import {SqliteDbCopy} from '@ionic-native/sqlite-db-copy/ngx';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {CopyService} from './shared/copy.service';
import {PalabrasService} from './shared/palabras.service';
import {TemasService} from './shared/temas.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    CopyService,
    SqliteDbCopy,
    SQLite,
    PalabrasService,
    TemasService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
