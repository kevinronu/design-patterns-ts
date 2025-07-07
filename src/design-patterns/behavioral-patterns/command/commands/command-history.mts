// src/commands/command-history.ts
import type { Command } from "./index.mjs";

export default class CommandHistory {
  private history: Command[] = [];

  push(command: Command) {
    this.history.push(command);
  }

  pop(): Command | undefined {
    return this.history.pop();
  }

  isEmpty(): boolean {
    return this.history.length === 0;
  }
}
