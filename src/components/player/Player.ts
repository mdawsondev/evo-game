import { Inventory } from "..";

interface IPlayer {
  name: string;
  inventory: Inventory;
}

export class Player implements IPlayer {
  private _name: string;
  private _inventory: Inventory;
  constructor () {
    this._name = "Player";
    this._inventory = new Inventory();
  }

  get name () {
    return this._name;
  }

  set name (name: string) {
    this._name = name;
  }

  get inventory () {
    return this._inventory;
  }
}
