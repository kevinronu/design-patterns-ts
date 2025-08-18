import { History } from "../caretaker/index.mjs";
import { type Command } from "../command/index.mjs";
import { EditorMemento } from "../memento/index.mjs";
import { State, type Originator } from "./index.mjs";

export default class Editor implements Originator {
  private state: State;
  private readonly history = new History();

  public constructor(initialText: string = "") {
    this.state = new State(
      initialText, // content
      initialText.length, // cursor
      initialText.length, // selectionStart
      initialText.length, // selectionEnd
      false, // bold
      "" // clipboard
    );
  }

  public execute(command: Command): void {
    this.history.push(command, new EditorMemento(this));
    command.execute();
  }

  public undo(): void {
    if (this.history.undo()) {
      // May rerender UI, etc.
    }
  }

  public redo(): void {
    if (this.history.redo()) {
      // May rerender UI, etc.
    }
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  // (Opcional) Solo para logging/debug
  public debug(): string {
    const { content, cursor, selectionStart, selectionEnd, bold, clipboard } =
      this.state;

    return [
      "— Editor State —",
      `content    : "${content}"`,
      `cursor     : ${cursor}`,
      `selection  : [${selectionStart}, ${selectionEnd}]`,
      `bold       : ${bold}`,
      `clipboard  : "${clipboard}"`,
    ].join("\n");
  }
}
