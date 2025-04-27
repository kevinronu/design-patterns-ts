import {
  GalacticCommandCenter,
  Spaceship,
} from "../../design-patterns/creational-design-patterns/singleton/index.mjs";

export default function singletonDemo() {
  const orion = new Spaceship("Orion");
  const nova = new Spaceship("Nova");

  orion.launch();
  orion.land();

  nova.launch();
  nova.land();

  GalacticCommandCenter.getInstance().showLogs();
}
