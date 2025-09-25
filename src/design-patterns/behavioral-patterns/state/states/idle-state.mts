import type { Context } from "../context/index.mjs";
import { type State, DrivingState, OffState } from "./index.mjs";

export default class IdleState implements State {
  private context: Context;

  public constructor(context: Context) {
    this.context = context;
  }

  public start(): string {
    return "✅ Engine already running.";
  }

  public stop(): string {
    this.context.changeState(new OffState(this.context));

    return "🔻 Car turned off.";
  }

  public accelerate(): string {
    this.context.changeState(new DrivingState(this.context));

    return "🏎️ Accelerating... Car is now moving.";
  }

  public emergencyBrake(): string {
    return "🛑 Car is idling. No need for emergency brake.";
  }
}
