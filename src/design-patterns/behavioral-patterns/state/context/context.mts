// src/context/context.mjs
// This Context class represents a Car and manages its dynamic behavior through states.

import { type State, OffState } from "../states/index.mjs";

export default class Context {
  private state: State;

  public constructor() {
    this.state = new OffState(this);
  }

  public changeState(newState: State) {
    console.log(`🔁 [Context] Transition to: ${newState.constructor.name}`);

    this.state = newState;
  }

  public getState(): State {
    return this.state;
  }

  public start(): string {
    return this.state.start();
  }

  public stop(): string {
    return this.state.stop();
  }

  public accelerate(): string {
    return this.state.accelerate();
  }

  public emergencyBrake(): string {
    return this.state.emergencyBrake();
  }
}
