import { AlienFactory } from "../creational-design-patterns/abstract-factory/factory/alien/index.mjs";
import { FuturisticFactory } from "../creational-design-patterns/abstract-factory/factory/futuristic/index.mjs";
import { Factory } from "../creational-design-patterns/abstract-factory/factory/index.mjs";

function deployArmy(factory: Factory) {
  const drone = factory.createDrone();
  const soldierRobot = factory.createSoldierRobot();

  drone.fly();
  drone.attack();

  soldierRobot.walk();
  soldierRobot.meleeAttack();
}

export default function abstractFactoryDemo() {
  const futuristicFactory = new FuturisticFactory();
  deployArmy(futuristicFactory);

  const alienFactory = new AlienFactory();
  deployArmy(alienFactory);
}
