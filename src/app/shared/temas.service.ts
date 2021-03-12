import {Injectable} from '@angular/core';
import {DatosEnglishService} from './datos-english.service';
import {Examen} from '../core/Examen';
import {Temas} from '../core/Temas';
import {Palabra} from '../core/palabra';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  private _TemasMap: Map<number, Temas>;

  constructor(private db: DatosEnglishService) {
    this._TemasMap = new Map<number, Temas>();
    this.generateData();
  }

  private generateData() {

    this.db.getTemas().then((data) => {
      data.forEach((e) => {
        const tema: Temas = new Temas(e.id, e.nombre);
        this._TemasMap.set(tema.id, tema);

      });
    });
  }

  get TemasMap(): Map<number, Temas> {
    return this._TemasMap;
  }
}
