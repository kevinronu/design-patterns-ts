import { type Originator, State } from "../originator/index.mjs";
import { type Command } from "./index.mjs";

export default class PasteCommand implements Command {
  private backup: State | null = null;
  private readonly editor: Originator;

  public constructor(editor: Originator) {
    this.editor = editor;
  }

  public getName(): string {
    return "Paste from clipboard";
  }

  public execute(): void {
    const prevState = this.editor.getState();
    const { content, cursor, bold, clipboard } = prevState;

    if (!clipboard) {
      return;
    }

    // Keep a snapshot for undo
    this.backup = prevState;

    // Paste at caret (cursor), collapse selection to end of pasted text
    const nextContent =
      content.slice(0, cursor) + clipboard + content.slice(cursor);
    const newCursor = cursor + clipboard.length;

    const nextState = new State(
      nextContent,
      newCursor,
      newCursor,
      newCursor,
      bold,
      clipboard // clipboard unchanged by paste
    );

    this.editor.setState(nextState);
  }

  public restore(): void {
    if (this.backup) {
      this.editor.setState(this.backup);
    }
  }
}
