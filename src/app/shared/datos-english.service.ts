import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {CopyService} from './copy.service';

@Injectable({
  providedIn: 'root',
})
export class DatosEnglishService {
  db: SQLiteObject;
  private frasesList: any[] = [];

  constructor(
    private plt: Platform,
    private sqlite: SQLite,
    private copy: CopyService
  ) {
    this.copy.copiarBBDD();
  }

  private getConector() {
    return {
      name: 'englishBD.db',
      location: 'default',
      createFromLocation: 1,
    };
  }

  private openDB() {
    return new Promise((resolve, reject) => {
      this.plt
        .ready()
        .then(() => {
          this.sqlite
            .create(this.getConector())
            .then((db: SQLiteObject) => {
              this.db = db;
              resolve('Exito al abrir');
            })
            .catch(() => {
              reject('Fallo al obtener conexión');
            });
        })
        .catch(() => {
          reject('Error el dispositivo no esta listo');
        });
    });
  }

  private requestExecuteSentence() {
    return new Promise<void>((resolve, reject) => {
      let consultable = true;
      if (!this.db) {
        this.openDB()
          .then((resp) => {
            // alert(resp);
            resolve();
          })
          .catch((err) => {
            consultable = false;
            alert(err);
            reject(err);
          });
      } else {
        resolve();
      }
    });
  }

  private executeSentence(sql, params) {
    return new Promise<Array<any>>((resolve, reject) => {
      this.requestExecuteSentence()
        .then(() => {
          this.db
            .executeSql(sql, params)
            .then((data) => {
              const responseData: Array<any> = [];
              for (let i = 0; i < data.rows.length; i++) {
                const obj = data.rows.item(i);
                responseData.push(obj);
              }
              resolve(responseData);
            })
            .catch((e) => {
              reject('fallo al ejecutar sentencia ' + JSON.stringify(e));
            });
        })
        .catch((err) => {
          alert(err);
        });
    });
  }

// this method is used to run every sql sentence
  obtenerFraseViajar() {
    const sql = 'select * from englishPhrases where idTema = 1 ';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  obtenerFraseComida() {
    const sql = 'select * from englishPhrases where idTema = 2 ';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  obtenerFraseInformatica() {
    const sql = 'select * from englishPhrases where idTema = 3 ';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  obtenerFraseNacionalidades() {
    const sql = 'select * from englishPhrases where idTema = 4 ';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  obtenerPlabras() {
    const sql = 'SELECT id, nombre FROM palabras';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  getExamenFromType(tipo: number) {
    const sql = `SELECT id,parteUno,parteDos,idPalabra,idTema FROM examen where  idTema = ${tipo} `;
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

  getTemas() {
    const sql = 'SELECT id,nombre FROM tema;';
    return new Promise<Array<any>>((resolve, reject) => {
      this.executeSentence(sql, [])
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }

}
