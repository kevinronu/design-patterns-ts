import { type Originator, State } from "../originator/index.mjs";
import { type Command } from "./index.mjs";

export default class MoveCaretCommand implements Command {
  private readonly editor: Originator;
  private readonly target: number;

  public constructor(editor: Originator, target: number) {
    this.editor = editor;
    this.target = target;
  }

  public getName(): string {
    return `Move caret to ${this.target}`;
  }

  public execute(): void {
    const prevState = this.editor.getState();

    const len = prevState.content.length;
    const pos = Math.max(0, Math.min(this.target, len));

    const next = new State(
      prevState.content,
      pos,
      pos,
      pos,
      prevState.bold,
      prevState.clipboard
    );

    this.editor.setState(next);
  }
}
