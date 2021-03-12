import {TravelService} from './../../shared/travel.service';
import {ActivatedRoute, NavigationExtras, Route, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Cadenas} from 'src/app/core/cadenas';

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {
  public frases: Cadenas[];
  private id: number = 1;

  constructor(private travel: TravelService, private router: Router) {
    this.frases = this.travel.frases;
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
