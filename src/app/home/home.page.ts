import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CopyService } from '../shared/copy.service';
import { DatosEnglishService } from '../shared/datos-english.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public variable = 4;
  public mostrar: boolean;
  frasesList: any[] = [];
  constructor(
    private copiaService: CopyService,
    private datoEnglish: DatosEnglishService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  copia() {
    this.copiaService.copiarBBDD();
  }
  toViajar() {
    const navExtras: NavigationExtras = {
      state: {
      },
    };
    this.router.navigate(['viajar'], navExtras);
  }
  toComida() {

    this.router.navigate(['comida']);
  }
  toInformatica() {
    this.router.navigate(['informatica']);
  }
  toNacionalidades() {
    this.router.navigate(['nacionalidades']);
  }
}
