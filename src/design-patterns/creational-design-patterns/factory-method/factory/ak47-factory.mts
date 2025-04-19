import AK47 from "../product/ak47.mjs";
import { Gun } from "../product/gun.mjs";
import Factory from "./factory.mjs";

export default class AK47Factory extends Factory {
  createGun(owner: string): Gun {
    return new AK47(owner);
  }
}
