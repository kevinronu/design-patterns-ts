export default class State {
  public readonly content: string;
  public readonly cursor: number;
  public readonly selectionStart: number;
  public readonly selectionEnd: number;
  public readonly bold: boolean;
  public readonly clipboard: string;

  public constructor(
    content: string,
    cursor: number,
    selectionStart: number,
    selectionEnd: number,
    bold: boolean,
    clipboard: string
  ) {
    this.content = content;
    this.cursor = cursor;
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
    this.bold = bold;
    this.clipboard = clipboard;
  }
}
