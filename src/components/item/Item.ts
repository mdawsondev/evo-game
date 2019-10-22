import { IDescription } from "..";
import { quality } from "../../data";

export interface IItem {
  description: IDescription;
  quality?: quality;
  value?: number;
}

export class Item implements IItem {
  private _description = {
    name: "",
    info: ""
  };

  private _quality: quality;
  private _value: number;

  constructor (data: IItem) {
    this._description.name = data.description.name;
    this._description.info = data.description.info;
    this._quality = data.quality || quality.common;
    this._value = data.value || 0;
  }

  get description() {
    return {
      name: this.name,
      info: this.info
    };
  }

  get info() {
    return this._description.info;
  }

  get name() {
    return this._description.name;
  }

  get value() {
    return this._value;
  }

  get quality() {
    return this._quality;
  }
}

