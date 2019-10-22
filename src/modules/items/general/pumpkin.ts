import { Item, IItem } from "..";

const config: IItem = {
  description: {
    name: "Pumpkin",
    info: "Orange and round, like a fat orange cat."
  },
  value: 10
}

export const pumpkin: Item = new Item(config);