import { Mediator } from "../mediators/index.mjs";
import { Component, ComponentType, EventType } from "./index.mjs";

export default class ThrusterControl implements Component {
  private mediator?: Mediator;
  private enabled = true;
  public thrust = 0;

  public setMediator(m: Mediator) {
    this.mediator = m;
  }

  public getType() {
    return ComponentType.ThrusterControl;
  }

  public enable() {
    this.enabled = true;
    console.log("[Thrusters] ENABLED");
  }

  public disable() {
    this.enabled = false;
    console.log("[Thrusters] DISABLED");
  }

  public setThrust(percent: number) {
    if (!this.enabled) {
      console.log("[Thrusters] Ignored setThrust, system disabled");

      return;
    }

    this.thrust = Math.min(100, Math.max(0, percent));
    console.log(`[Thrusters] thrust → ${this.thrust}%`);

    if (this.mediator) {
      this.mediator.notify(this, EventType.SET_THRUST, this.thrust);
    }
  }
}
