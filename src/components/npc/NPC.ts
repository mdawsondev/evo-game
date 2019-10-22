export interface INPC {
  health: number;
  name: string;
}

export class NPC implements INPC {
  private _health: number;
  private _name: string;
  constructor (data: INPC) {
    this._name = data.name;
    this._health = data.health;
  }

  get name () {
    return this._name;
  }

  get health() {
    return this._health;
  }
}
