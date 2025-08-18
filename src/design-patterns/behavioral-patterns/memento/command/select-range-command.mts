import { type Originator, State } from "../originator/index.mjs";
import { type Command } from "./index.mjs";

export default class SelectRangeCommand implements Command {
  private readonly editor: Originator;
  private readonly start: number;
  private readonly end: number;

  public constructor(editor: Originator, start: number, end: number) {
    this.editor = editor;
    this.start = start;
    this.end = end;
  }

  public getName(): string {
    return `Select [${this.start}, ${this.end}]`;
  }

  public execute(): void {
    const prevState = this.editor.getState();
    const len = prevState.content.length;

    const start = Math.max(0, Math.min(this.start, len));
    const end = Math.max(start, Math.min(this.end, len));

    const next = new State(
      prevState.content,
      prevState.cursor,
      start,
      end,
      prevState.bold,
      prevState.clipboard
    );

    this.editor.setState(next);
  }
}
