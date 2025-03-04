import { Gun } from "../product/gun.mjs";
import Musket from "../product/musket.mjs";
import Factory from "./factory.mjs";

export default class MusketFactory extends Factory {
  createGun(owner: string): Gun {
    return new Musket(owner);
  }
}
