export class Cadenas
{
  constructor(private _fraseEn: string, private _fraseEs: string){

  }
  get fraseEn(): string {
    return this._fraseEn;
  }
  get fraseEs(): string {
    return this._fraseEs;
  }

}
