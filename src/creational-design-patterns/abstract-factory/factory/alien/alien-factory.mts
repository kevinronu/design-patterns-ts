import { Factory } from "../index.mjs";
import { Drone, SoldierRobot } from "../../product/index.mjs";
import { AlienDrone, AlienSoldierRobot } from "./index.mjs";

export default class AlienFactory implements Factory {
  createDrone(): Drone {
    console.log(
      "[AlienFactory] Creating Alien Drone unit: Model-XR bio-engineered flight unit initialized."
    );
    return new AlienDrone();
  }

  createSoldierRobot(): SoldierRobot {
    console.log(
      "[AlienFactory] Deploying Alien Soldier Robot: Elite close-combat warrior grown in stasis chamber."
    );
    return new AlienSoldierRobot();
  }
}
