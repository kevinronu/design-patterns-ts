import { Drone, SoldierRobot } from "../product/index.mjs";

export default interface Factory {
  createDrone(): Drone;
  createSoldierRobot(): SoldierRobot;
}
