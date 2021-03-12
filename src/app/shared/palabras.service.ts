import {Palabra} from './../core/palabra';
import {DatosEnglishService} from './datos-english.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  private _palabrasMap: Map<number, Palabra>;

  constructor(private db: DatosEnglishService) {
    this._palabrasMap = new Map<number, Palabra>();
    this.generateData();
  }

  private generateData() {
    this.db.obtenerPlabras().then((data) => {
      data.forEach(x => {
        const palabra: Palabra = new Palabra(x.id, x.nombre);
        this._palabrasMap.set(palabra.id, palabra);
      });
    });
  }

  get palabrasMap(): Map<number, Palabra> {
    return this._palabrasMap;
  }
}
