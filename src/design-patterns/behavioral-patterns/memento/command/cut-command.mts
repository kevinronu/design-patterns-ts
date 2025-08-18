import { type Originator, State } from "../originator/index.mjs";
import { type Command } from "./index.mjs";

export default class CutCommand implements Command {
  private backup: State | null = null;
  private readonly editor: Originator;

  public constructor(editor: Originator) {
    this.editor = editor;
  }

  public getName(): string {
    return "Cut selection";
  }

  public execute(): void {
    const prevState = this.editor.getState();

    const { content, selectionStart, selectionEnd, bold } = prevState;

    if (selectionStart === selectionEnd) {
      return;
    }

    // Keep snapshot to undo
    this.backup = prevState;

    // Compute next state purely from prev (no direct editor props)
    const nextClipboard = content.slice(selectionStart, selectionEnd);
    const nextContent =
      content.slice(0, selectionStart) + content.slice(selectionEnd);
    const nextCursor = selectionStart;

    const nextState = new State(
      nextContent,
      nextCursor,
      nextCursor,
      nextCursor,
      bold,
      nextClipboard
    );

    this.editor.setState(nextState);
  }

  public restore(): void {
    if (this.backup) {
      this.editor.setState(this.backup);
    }
  }
}
