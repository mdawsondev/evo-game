import { Area, IAreaConfig } from "../../components";
import { pumpkin } from "../items";
import { adam } from "../npcs/general";

const configOffice: IAreaConfig = {
  description: {
    name: "Office",
    info: "Small, dark, cramped."
  },
  items: [
    pumpkin
  ],
  npcs: [
    adam
  ]
}

export const office = new Area(configOffice);