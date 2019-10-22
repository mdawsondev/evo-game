import { Weapon, IWeapon } from "../../components";
import { weapons, quality } from "../../data";
import { genQuality } from "./quality";

class GenerateWeapon {
  private _categories: String[];
  constructor() {
    this._categories = Object.keys(weapons);
  }

  get categories() {
    return this._categories;
  }
  
  /**
   * @param level The item level to generate.
   */
  public generate = (level: number) => {
    const rarity: quality = genQuality();
    const weaponClass: string = this.categories[Math.floor(Math.random() * this.categories.length)].toString();
    const weaponList: string[] = weapons[weaponClass];
    const weaponType: string = weaponList[Math.floor(Math.random() * weaponList.length)];
    const config: IWeapon = {
      damage: level * Math.floor(Math.random() * 10),
      description: {
        name: weaponType,
        info: `It's a ${weaponType}, what more do you want?`
      },
      quality: rarity,
      value: level * Math.floor(Math.random() * 10)
    };

    const weapon = new Weapon(config);
    return weapon;
  }
}

export const genWeapon = new GenerateWeapon().generate;

genWeapon(2);