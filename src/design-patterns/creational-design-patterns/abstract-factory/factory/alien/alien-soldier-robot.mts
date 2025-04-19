import { SoldierRobot } from "../../product/index.mjs";

export default class AlienSoldierRobot implements SoldierRobot {
  walk(): void {
    console.log(
      "[AlienSoldierRobot] Movement initiated: Floating above ground using anti-gravity field."
    );
  }

  meleeAttack(): void {
    console.log(
      "[AlienSoldierRobot] Engaging in melee: Slashing enemy with high-velocity bio-engineered claws."
    );
  }
}
