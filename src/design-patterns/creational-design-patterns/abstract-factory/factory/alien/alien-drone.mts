import { Drone } from "../../product/index.mjs";

export default class AlienDrone implements Drone {
  fly(): void {
    console.log(
      "[AlienDrone] Initiating flight: Levitating with bio-energy propulsion."
    );
  }

  attack(): void {
    console.log(
      "[AlienDrone] Engaging target: Firing corrosive acid projectiles at designated enemy coordinates."
    );
  }
}
