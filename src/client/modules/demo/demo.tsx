import { Item, NPC, Player, Weapon, } from "../../components";
import { genWeapon } from "../../scripts/generate";
import { office } from "../areas/office";
import React from "react";
import { Login } from "../../components/login";

export const Demo = () => {
  const player = new Player();
  const [inventory, setInventory] = React.useState(player.inventory.items);
  const [weapon, setWeapon] = React.useState(genWeapon(1));

  return (
    <div>
      <Login />
      <p>{player.name}, welcome to the game.</p>
      <p>You are currently standing in {office.name} and it is: {office.info}</p>
      <p>{office.name} contains {office.items.map((item: Item) => item.name)}.</p>
      <p>{office.name} is home to {office.npcs.map((npc: NPC) => npc.name)}.</p>
      <p>Oh hey, look! There's a {weapon.name} on the floor, neat!</p>

      <button onClick={() => setWeapon(genWeapon(1))}>Generate New Weapon</button>
      <button onClick={() => setInventory([...inventory, weapon])}>Take Weapon</button>

      <p>Your inventory looks like this: {JSON.stringify(inventory)}.</p>
    </div>
  )
}
