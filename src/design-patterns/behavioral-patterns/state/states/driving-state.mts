import type { Context } from "../context/index.mjs";
import { EmergencyState, IdleState, type State } from "./index.mjs";

export default class DrivingState implements State {
  private context: Context;

  public constructor(context: Context) {
    this.context = context;
  }

  public start(): string {
    return "🚗 Already driving.";
  }

  public stop(): string {
    this.context.changeState(new IdleState(this.context));

    return "🟡 Car stopped. Engine idling.";
  }

  public accelerate(): string {
    return "🚀 Accelerating further...";
  }

  public emergencyBrake(): string {
    this.context.changeState(new EmergencyState(this.context));

    return "🛑 Emergency brake activated! Car stopped abruptly!";
  }
}
