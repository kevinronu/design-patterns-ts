import type { Context } from "../context/index.mjs";
import { type State, IdleState, OffState } from "./index.mjs";

export default class EmergencyState implements State {
  private context: Context;

  public constructor(context: Context) {
    this.context = context;
  }

  public start(): string {
    this.context.changeState(new IdleState(this.context));

    return "🛠️ Recovery complete. Engine idling.";
  }

  public stop(): string {
    this.context.changeState(new OffState(this.context));

    return "🔌 Car shut down after emergency.";
  }

  public accelerate(): string {
    return "❌ Cannot accelerate. Emergency state!";
  }

  public emergencyBrake(): string {
    return "🚨 Already in emergency state.";
  }
}
