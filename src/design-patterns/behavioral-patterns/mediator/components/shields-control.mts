import { Mediator } from "../mediators/index.mjs";
import { Component, ComponentType, EventType } from "./index.mjs";

export default class ShieldsControl implements Component {
  private mediator?: Mediator;
  private enabled = true;
  public up = false;

  public setMediator(m: Mediator) {
    this.mediator = m;
  }

  public getType() {
    return ComponentType.ShieldsControl;
  }

  public enable() {
    this.enabled = true;
    console.log("[Shields] ENABLED");
  }

  public disable() {
    this.enabled = false;
    console.log("[Shields] DISABLED");
  }

  public toggleShields() {
    if (!this.enabled) {
      console.log("[Shields] Ignored toggle, system disabled");

      return;
    }

    this.up = !this.up;
    console.log(`[Shields] ${this.up ? "RAISED" : "LOWERED"}`);

    if (this.mediator) {
      this.mediator.notify(this, EventType.TOGGLE_SHIELDS, this.up);
    }
  }
}
