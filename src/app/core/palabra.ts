export class Palabra {
  constructor(private _id: number, private _nombre: string) {}

  get id(): number {
    return this._id;
  }
  get nombre(): string {
    return this._nombre;
  }
}
