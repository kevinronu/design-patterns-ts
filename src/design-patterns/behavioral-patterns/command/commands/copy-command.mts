import type { Command } from "./index.mjs";
import type { Editor } from "../editor/index.mjs";

export default class CopyCommand implements Command {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): boolean {
    const { selectionStart, selectionEnd, text } = this.editor;

    if (selectionStart === selectionEnd) {
      return false;
    }

    this.editor.clipboard = text.slice(selectionStart, selectionEnd);

    return false;
  }

  public undo(): void {
    // Copy has nothing to undo
  }
}
