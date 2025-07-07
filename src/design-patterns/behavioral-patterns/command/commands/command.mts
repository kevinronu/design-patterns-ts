export default interface Command {
  execute(): boolean;
  undo(): void;
}
