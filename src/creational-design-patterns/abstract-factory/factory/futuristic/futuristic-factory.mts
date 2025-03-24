import { Factory } from "../index.mjs";
import { Drone, SoldierRobot } from "../../product/index.mjs";
import { FuturisticDrone, FuturisticSoldierRobot } from "./index.mjs";

export default class FuturisticFactory implements Factory {
  createDrone(): Drone {
    console.log(
      "[FuturisticFactory] Assembling Futuristic Drone: Model-FX7 activated with anti-gravity systems."
    );
    return new FuturisticDrone();
  }

  createSoldierRobot(): SoldierRobot {
    console.log(
      "[FuturisticFactory] Deploying Futuristic Soldier Robot: Plasma-armored unit ready for ground assault."
    );
    return new FuturisticSoldierRobot();
  }
}
