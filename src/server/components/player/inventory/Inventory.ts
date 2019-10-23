import { Item } from "../..";

interface IInventory {
  items: Item[];
  money: number;
}

export class Inventory implements IInventory {
  private _items: Item[];
  private _money: number;

  constructor () {
    this._items = [];
    this._money = 0;
  }

  get items () {
    return this._items;
  }

  get money () {
    return this._money;
  }

  public addItem = (item: Item) => {
    this._items.push(item);
  }

  public removeItem = (item: Item) => {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }
}
