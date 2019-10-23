import { Item, NPC, Player, Weapon, } from "../../../server/components";
import { genWeapon } from "../../../server/functions/generate";
import { office } from "../../../server/modules/areas/office";
import React from "react";

/** --- Demo Program ---
 * @desc Hey, who knows?
 * @version v0.0.0
 */

export class Demo extends React.Component {
  public player = new Player();
  public weapon = genWeapon(5);

  public render() {
    this.player.inventory.addItem(this.weapon)
    return (
      <div>
        <p>{this.player.name}, welcome to the game.</p>
        <p>You are currently standing in {office.name} and it is: {office.info}</p>
        <p>{office.name} contains {office.items.map((item: Item) => item.name)}.</p>
        <p>{office.name} is home to {office.npcs.map((npc: NPC) => npc.name)}.</p>
        <p>Oh hey, look! There's a {this.weapon.name} on the floor, neat!</p>
        <p>Your inventory looks like this: {JSON.stringify(this.player.inventory)}.</p>
      </div>
    )
  }
}