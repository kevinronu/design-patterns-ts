import { GunType } from "../product/gun.mjs";
import AK47Factory from "./ak47-factory.mjs";
import Factory from "./factory.mjs";
import MusketFactory from "./musket-factory.mjs";

export default function getFactory(gunType: GunType): Factory {
  switch (gunType) {
    case GunType.AK47:
      return new AK47Factory();
    case GunType.Musket:
      return new MusketFactory();
    default:
      throw new Error(`unknown gun type: ${gunType}`);
  }
}
