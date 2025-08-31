import {
  Component,
  ComponentType,
  EventType,
  ScannerControl,
  ShieldsControl,
  ThrusterControl,
  WeaponsControl,
} from "../components/index.mjs";
import { Mediator } from "./index.mjs";

export default class Bridge implements Mediator {
  private thrusterControl?: ThrusterControl;
  private weaponsControl?: WeaponsControl;
  private shieldsControl?: ShieldsControl;
  private scannerControl?: ScannerControl;

  public register(c: Component): void {
    c.setMediator(this);

    switch (c.getType()) {
      case ComponentType.ThrusterControl:
        this.thrusterControl = c as ThrusterControl;

        break;

      case ComponentType.WeaponsControl:
        this.weaponsControl = c as WeaponsControl;

        break;

      case ComponentType.ShieldsControl:
        this.shieldsControl = c as ShieldsControl;

        break;

      case ComponentType.Scanner:
        this.scannerControl = c as ScannerControl;

        break;
    }
  }

  private reportStatus(): void {
    const thrust = this.thrusterControl?.thrust ?? 0;
    const weapons = this.weaponsControl?.armed ? "ARMED" : "SAFE";
    const shields = this.shieldsControl?.up ? "UP" : "DOWN";
    const scan = this.scannerControl?.lastScan ?? "none";

    console.log(
      `[Bridge::Status] Thrust=${thrust}% | ` +
        `Weapons=${weapons} | Shields=${shields} | ` +
        `LastScan="${scan}"`
    );
  }

  public notify(sender: Component, event: EventType, data?: any): void {
    console.log(`\n[Bridge] ${event} from ${sender.getType()}`);

    switch (event) {
      case EventType.SET_THRUST:
        if (data > 80 && this.shieldsControl) {
          console.log("[Bridge] Thrust > 80% → forcing shields DOWN");
          this.shieldsControl.up = false;
          this.shieldsControl.disable();
        }

        if (
          this.thrusterControl &&
          this.thrusterControl.thrust > 60 &&
          this.weaponsControl?.armed
        ) {
          console.log("[Bridge] Weapons armed → capping thrust at 60%");
          this.thrusterControl.thrust = 60;
        }

        break;

      case EventType.TOGGLE_WEAPONS:
        if (data && this.thrusterControl && this.thrusterControl.thrust > 60) {
          console.log("[Bridge] Enforcing thrust cap due to weapons");
          this.thrusterControl.setThrust(60);
        }

        break;

      case EventType.TOGGLE_SHIELDS:
        if (data && this.weaponsControl?.armed) {
          console.log("[Bridge] Shields UP → auto-disarming weapons");
          this.weaponsControl.armed = false;
        }

        if (this.scannerControl && !data) {
          console.log("[Bridge] Shields lowered → auto-initiating scanner");
          this.scannerControl.run();
        }

        break;

      case EventType.RUN_SCAN:
        if (!this.scannerControl) {
          return;
        }

        console.log("[Bridge] Scan in progress → disabling thrusters");

        if (this.thrusterControl) {
          this.thrusterControl.disable();
        }

        this.scannerControl.lastScan = [
          "asteroid",
          "nebula",
          "hostiles",
          "clear",
        ][Math.floor(Math.random() * 4)];

        console.log(`[Bridge] Scan result: "${this.scannerControl.lastScan}"`);

        // reenabling thrusters afterwards
        console.log("[Bridge] Scan complete → re-enabling thrusters");

        if (this.thrusterControl) {
          this.thrusterControl.enable();
        }

        break;
    }

    this.reportStatus();
  }
}
