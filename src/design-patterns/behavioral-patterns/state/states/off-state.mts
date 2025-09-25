import type { Context } from "../context/index.mjs";
import { type State, IdleState } from "./index.mjs";

export default class OffState implements State {
  private context: Context;

  public constructor(context: Context) {
    this.context = context;
  }

  public start(): string {
    this.context.changeState(new IdleState(this.context));

    return "🟢 Car started. Engine is idling.";
  }

  public stop(): string {
    return "🔇 Car is already off.";
  }

  public accelerate(): string {
    return "❌ Cannot accelerate. Engine is off.";
  }

  public emergencyBrake(): string {
    return "🚫 No effect. Car is off.";
  }
}
