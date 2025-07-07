import type { Command } from "./index.mjs";
import type { Editor } from "../editor/index.mjs";

export default class PasteCommand implements Command {
  private editor: Editor;
  private backup: string = "";

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public execute(): boolean {
    const { clipboard, caretPosition, text } = this.editor;

    if (!clipboard) return false;

    this.backup = text;

    // Insert clipboard content at the caret position
    this.editor.text =
      text.slice(0, caretPosition) + clipboard + text.slice(caretPosition);

    // Move the caret position to the end of the pasted content
    const newCaret = caretPosition + clipboard.length;

    this.editor.caretPosition =
      this.editor.selectionStart =
      this.editor.selectionEnd =
        newCaret;

    return true;
  }

  public undo(): void {
    this.editor.text = this.backup;
  }
}
