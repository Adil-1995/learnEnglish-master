import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Cadenas} from 'src/app/core/cadenas';
import {ComidaService} from 'src/app/shared/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {
  public frases: Cadenas[];
  private id: number = 2;

  constructor(private router: Router, private comida: ComidaService) {
    this.frases = this.comida.frases;
  }

  ngOnInit() {
  }
  routerMe() {
    const extrasDeNavegcacion: NavigationExtras = {
      state: {
        idTema: this.id,
      }
    };
    this.router.navigate(['examen'], extrasDeNavegcacion);
  }

}
