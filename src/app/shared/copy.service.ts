import { Injectable } from '@angular/core';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CopyService {
  constructor(
    private platform: Platform,
    private sqliteDbCopy: SqliteDbCopy) {}

  async copiarBBDD() {
    await this.platform
      .ready()
      .then(async () => {
        console.log('la plataforma está lista');

        await this.sqliteDbCopy
          .copy('englishBD.db', 0)
          .then(() => {
            console.log('la BBDD se ha copiado correctamente');
          })
          .catch((error) => {
            console.log('Fallo la copia de la BBDD');
            console.log('Error debido a: ' + error);
          });
      })
      .catch((err) => {
        console.log('la plataforma no esta lista');
        console.log('Error debido a: ' + err);
      });
  }
}
