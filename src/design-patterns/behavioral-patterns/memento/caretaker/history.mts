import { type Command } from "../command/index.mjs";
import { type Memento } from "../memento/index.mjs";

type Pair = { command: Command; memento: Memento };

export default class History {
  private history: Pair[] = [];
  // virtualSize tracks the logical cursor for undo/redo without discarding redoable entries.
  private virtualSize = 0;

  public push(command: Command, memento: Memento): void {
    if (this.virtualSize !== this.history.length && this.virtualSize > 0) {
      this.history = this.history.slice(0, this.virtualSize);
    }

    this.history.push({ command, memento });
    this.virtualSize = this.history.length;
  }

  private getUndo(): Pair | null {
    if (this.virtualSize === 0) {
      return null;
    }

    this.virtualSize = Math.max(0, this.virtualSize - 1);

    return this.history[this.virtualSize] ?? null;
  }

  public undo(): boolean {
    const pair = this.getUndo();

    if (!pair) {
      return false;
    }

    console.log("Undoing:", pair.command.getName());

    pair.memento.restore();

    return true;
  }

  private getRedo(): Pair | null {
    if (this.virtualSize === this.history.length) {
      return null;
    }

    this.virtualSize = Math.min(this.history.length, this.virtualSize + 1);

    return this.history[this.virtualSize - 1] ?? null;
  }

  public redo(): boolean {
    const pair = this.getRedo();

    if (!pair) {
      return false;
    }

    console.log("Redoing:", pair.command.getName());
    pair.memento.restore();
    pair.command.execute();

    return true;
  }
}
