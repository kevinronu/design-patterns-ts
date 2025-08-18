// src/demo/memento-demo.mts
import {
  Editor,
  State,
} from "../../../design-patterns/behavioral-patterns/memento/originator/index.mjs";
import {
  CopyCommand,
  CutCommand,
  PasteCommand,
} from "../../../design-patterns/behavioral-patterns/memento/command/index.mjs";

export default function mementoDemo(): void {
  const editor = new Editor("");

  // 1) Initial setup (not a command): seed text and selection [0,5] = "Hello".
  //    From now on, ONLY commands will change state.
  editor.setState(new State("Hello brave world", 5, 0, 5, false, ""));
  console.log("Initial:", editor.debug());
  // content="Hello brave world" cursor=5 sel=[0,5] bold=false

  // 2) COPY — fills clipboard with the selected text (“Hello”).
  editor.execute(new CopyCommand(editor));
  console.log("After COPY (clipboard now has 'Hello'):", editor.debug());

  // 3) CUT — removes the selection from the text, collapses caret at selection start.
  editor.execute(new CutCommand(editor));
  console.log("After CUT (text shortened; caret at 0):", editor.debug());

  // 4) PASTE — inserts clipboard at the caret (currently 0). Text returns to original content.
  editor.execute(new PasteCommand(editor));
  console.log("After PASTE (text restored at beginning):", editor.debug());

  // 5) UNDO / REDO — driven by History (pairs of {command, memento}).
  editor.undo(); // undo paste
  console.log("Undo #1 (revert PASTE):", editor.debug());

  editor.undo(); // undo cut
  console.log("Undo #2 (revert CUT):", editor.debug());

  editor.redo(); // redo cut
  console.log("Redo  #1 (reapply CUT):", editor.debug());

  editor.redo(); // redo paste
  console.log("Redo  #2 (reapply PASTE):", editor.debug());
}
