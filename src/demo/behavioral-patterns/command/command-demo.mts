import { Editor } from "../../../design-patterns/behavioral-patterns/command/editor/index.mjs";
import {
  CopyCommand,
  CutCommand,
  PasteCommand,
} from "../../../design-patterns/behavioral-patterns/command/commands/index.mjs";

export default function CommandDemo() {
  const editor = new Editor("Hello world!");

  // Select "Hello"
  editor.selectionStart = 0;
  editor.selectionEnd = 5;
  editor.caretPosition = 5;

  // Execute copy
  editor.executeCommand(new CopyCommand(editor));
  console.log(editor.clipboard); // "Hello"

  // Execute cut
  editor.executeCommand(new CutCommand(editor));
  console.log(editor.text); // " world!"
  console.log(editor.clipboard); // "Hello"

  // Undo the cut
  editor.undo();
  console.log(editor.text); // "Hello world!"

  // Paste "Hello" at the end
  editor.selectionStart =
    editor.selectionEnd =
    editor.caretPosition =
      editor.text.length;
  editor.executeCommand(new PasteCommand(editor));
  console.log(editor.text); // "Hello world!Hello"
}
