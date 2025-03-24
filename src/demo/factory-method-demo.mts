import { GunType } from "../creational-design-patterns/factory-method/product/index.mjs";
import { getFactory } from "../creational-design-patterns/factory-method/factory/index.mjs";

export default function factoryMethodDemo() {
  const owner = "Kevin";
  const gunType1 = GunType.AK47;

  const factory1 = getFactory(gunType1);
  const gun1 = factory1.createGun(owner);
  console.log(`${owner} got a ${gun1.getType()}`);
  gun1.fire();
  gun1.specialMove();

  const gunType2 = GunType.Musket;
  const factory2 = getFactory(gunType2);
  factory2.oneTimeAction("John");
}
