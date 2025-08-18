import { Originator, State } from "../originator/index.mjs";
import { Memento } from "./index.mjs";

export default class EditorMemento implements Memento {
  private readonly editor: Originator;
  private readonly state: State;

  public constructor(editor: Originator) {
    this.editor = editor;
    this.state = editor.getState();
  }

  restore(): void {
    this.editor.setState(this.state);
  }
}
