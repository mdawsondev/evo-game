import { IItem, Item } from "../"

export interface IWeapon extends IItem {
  damage: number;
}

export class Weapon extends Item {
  private _damage: number = 0;
  constructor(data: IWeapon) {
    super({
      description: data.description,
      value: data.value,
      quality: data.quality
    });
    this._damage = data.damage;
  }

  get damage() {
    return this._damage;
  }
}
