import { Drone } from "../../product/index.mjs";

export default class FuturisticDrone implements Drone {
  fly(): void {
    console.log(
      "[FuturisticDrone] Flight mode engaged: Hovering with anti-gravity boosters at high altitude."
    );
  }

  attack(): void {
    console.log(
      "[FuturisticDrone] Target acquired: Emitting concentrated laser beams for precision strike."
    );
  }
}
