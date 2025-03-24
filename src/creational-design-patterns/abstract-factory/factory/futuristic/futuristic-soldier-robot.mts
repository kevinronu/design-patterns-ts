import { SoldierRobot } from "../../product/index.mjs";

export default class FuturisticSoldierRobot implements SoldierRobot {
  walk(): void {
    console.log(
      "[FuturisticSoldierRobot] Advancing: Walking steadily using magnetic boots on metallic terrain."
    );
  }

  meleeAttack(): void {
    console.log(
      "[FuturisticSoldierRobot] Engaging in close combat: Striking with high-frequency plasma blade."
    );
  }
}
