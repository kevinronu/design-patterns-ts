// src/editor/editor.ts
import { CommandHistory } from "../commands/index.mjs";
import type Command from "../commands/command.mjs";

export default class Editor {
  text: string = "";
  clipboard: string = "";
  selectionStart: number = 0;
  selectionEnd: number = 0;
  caretPosition: number = 0;
  private history = new CommandHistory();

  constructor(initialText: string = "") {
    this.text = initialText;
    this.caretPosition = initialText.length;
    this.selectionStart = initialText.length;
    this.selectionEnd = initialText.length;
  }

  public executeCommand(command: Command) {
    if (command.execute()) {
      this.history.push(command);
    }
  }

  public undo() {
    if (!this.history.isEmpty()) {
      const command = this.history.pop();
      command?.undo();
    }
  }
}
