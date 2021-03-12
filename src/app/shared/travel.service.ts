import { Cadenas } from './../core/cadenas';
import { DatosEnglishService } from './datos-english.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  public frases: Cadenas[];

  constructor(private db: DatosEnglishService) {
    this.frases = [];
    this.generateData();
  }
  generateData() {
    this.db
      .obtenerFraseViajar()
      .then((data) => {
        console.log(data);

        data.forEach((x) => {
          const frase: Cadenas = new Cadenas(x.fraseIn, x.fraseEs);
          this.frases.push(frase);
        });
      })
      .catch(() => {});
  }
}
