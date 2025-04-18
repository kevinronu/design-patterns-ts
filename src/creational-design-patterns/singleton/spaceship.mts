import { GalacticCommandCenter } from "./index.mjs";

export default class Spaceship {
  public readonly _name: string;

  public constructor(name: string) {
    this._name = name;
    const galacticCommandCenter = GalacticCommandCenter.getInstance();
    galacticCommandCenter.logEvent(
      `🧪 Spaceship "${this._name}" registered at Command Center.`
    );
  }

  public launch() {
    const galacticCommandCenter = GalacticCommandCenter.getInstance();
    galacticCommandCenter.logEvent(`🛬 Spaceship "${this._name}" launched.`);
  }

  public land() {
    const galacticCommandCenter = GalacticCommandCenter.getInstance();
    galacticCommandCenter.logEvent(`🛬 Spaceship "${this._name}" landed.`);
  }
}
