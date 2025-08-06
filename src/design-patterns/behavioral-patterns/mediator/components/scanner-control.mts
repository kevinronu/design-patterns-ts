import { Mediator } from "../mediators/index.mjs";
import { Component, ComponentType, EventType } from "./index.mjs";

export default class ScannerControl implements Component {
  private mediator?: Mediator;
  private enabled = true;
  public lastScan = "none";

  public setMediator(m: Mediator) {
    this.mediator = m;
  }

  public getType() {
    return ComponentType.Scanner;
  }

  public enable() {
    this.enabled = true;
    console.log("[Scanner] ENABLED");
  }

  public disable() {
    this.enabled = false;
    console.log("[Scanner] DISABLED");
  }

  public run(): void {
    if (!this.enabled) {
      console.log("[Scanner] Ignored run, system disabled");

      return;
    }

    console.log("[Scanner] running scan");

    if (this.mediator) {
      this.mediator.notify(this, EventType.RUN_SCAN);
    }
  }
}
