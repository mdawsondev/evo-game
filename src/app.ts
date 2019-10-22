import { Item, NPC, Player, Weapon, } from "./components";
import { genWeapon } from "./functions/generate";
import { office } from "./modules/areas/office";

/** --- Demo Program ---
 * @desc Hey, who knows?
 * @version v0.0.0
 */

class Demo {
  private _name: string;
  private _version: string;
  constructor() {
    this._name = "Demo Game";
    this._version = "v0.0.0";
  }

  init = () => {
    /** Generated player. */
    const player: Player = new Player();
    const weapon: Weapon = genWeapon(5);

    console.log(`
      ${player.name}, welcome to ${this.name}.
      You are currently standing in ${office.name} and it is: ${office.info}
      ${office.name} contains ${office.items.map((item: Item) => item.name)}.
      ${office.name} is home to ${office.npcs.map((npc: NPC) => npc.name)}.
      Oh hey, look! There's a ${weapon.name} on the floor, neat!
      You picked it up.
    `);

    player.inventory.addItem(weapon);
    console.log(`Look at you, ${player.name}, you have ${player.inventory.items.map((thing: Weapon | Item) => thing.name)}.`);
  };

  get name() {
    return this._name;
  }
}

const game = new Demo();
game.init();