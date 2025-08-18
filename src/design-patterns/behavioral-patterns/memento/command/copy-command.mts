import { type Originator, State } from "../originator/index.mjs";
import { type Command } from "./index.mjs";

// In this stricter architecture, Copy DOES mutate state (clipboard lives in State)
export default class CopyCommand implements Command {
  private readonly editor: Originator;

  public constructor(editor: Originator) {
    this.editor = editor;
  }

  public getName(): string {
    return "Copy selection";
  }

  public execute(): void {
    const prevState = this.editor.getState();

    const { content, cursor, selectionStart, selectionEnd, bold } = prevState;

    if (selectionStart === selectionEnd) {
      return;
    }

    const newClipboard = content.slice(selectionStart, selectionEnd);

    // Only clipboard changes; caret/selection remain untouched
    const nextState = new State(
      content,
      cursor,
      selectionStart,
      selectionEnd,
      bold,
      newClipboard
    );

    this.editor.setState(nextState);
  }

  public restore(): void {
    // No backup kept on purpose; typically copy isn't undone.
  }
}
