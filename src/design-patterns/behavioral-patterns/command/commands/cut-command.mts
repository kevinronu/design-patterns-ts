import type { Command } from "./index.mjs";
import type { Editor } from "../editor/index.mjs";

export default class CutCommand implements Command {
  private editor: Editor;
  private backup: string = "";

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): boolean {
    const { selectionStart, selectionEnd, text } = this.editor;

    if (selectionStart === selectionEnd) {
      return false;
    }

    this.backup = text;

    // Save in clipboard the selected text
    this.editor.clipboard = text.slice(selectionStart, selectionEnd);

    // Delete the selected text from the editor
    this.editor.text = text.slice(0, selectionStart) + text.slice(selectionEnd);

    // Move the caret to the start of the selection
    this.editor.selectionStart =
      this.editor.selectionEnd =
      this.editor.caretPosition =
        selectionStart;

    return true;
  }

  public undo(): void {
    this.editor.text = this.backup;
  }
}
