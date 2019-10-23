import { Weapon, IWeapon } from "../../items";
import { quality } from "../../../data";

const config: IWeapon = {
  damage: 10,
  description: {
    name: "Sword",
    info: "Poke things to death with the pointy end."
  },
  quality: quality.common,
  value: 10
}

export const sword = new Weapon(config);

console.log(sword);