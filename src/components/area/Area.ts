import { Item, NPC, Weapon } from "..";
import { IDescription } from "..";

interface IArea {
  description: IDescription;
  items: Item[];
  npcs: NPC[];
}

export interface IAreaConfig {
  description: IDescription;
  items?: Item[];
  npcs?: NPC[];
}

export class Area implements IArea {
  private _description = {
    name: "",
    info: ""
  }

  private _items: Item[];
  private _npcs: NPC[];

  constructor (config: IAreaConfig) {
    this._description = config.description;
    this._items = config.items || [];
    this._npcs = config.npcs || [];
  }

  get description() {
    return {
      name: this.name,
      info: this.info
    }
  }

  get items() {
    return this._items;
  }

  get npcs() {
    return this._npcs;
  }

  get name() {
    return this._description.name;
  }

  get info() {
    return this._description.info;
  }
}
