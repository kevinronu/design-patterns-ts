import { Mediator } from "../mediators/index.mjs";
import { Component, ComponentType, EventType } from "./index.mjs";

export default class WeaponsControl implements Component {
  private mediator?: Mediator;
  private enabled = true;
  public armed = false;

  public setMediator(m: Mediator) {
    this.mediator = m;
  }

  public getType() {
    return ComponentType.WeaponsControl;
  }

  public enable() {
    this.enabled = true;
    console.log("[Weapons] ENABLED");
  }

  public disable() {
    this.enabled = false;
    console.log("[Weapons] DISABLED");
  }

  public toggleArm() {
    if (!this.enabled) {
      console.log("[Weapons] Ignored toggle, system disabled");

      return;
    }

    this.armed = !this.armed;
    console.log(`[Weapons] ${this.armed ? "ARMED" : "SAFE"}`);

    if (this.mediator) {
      this.mediator.notify(this, EventType.TOGGLE_WEAPONS, this.armed);
    }
  }
}
