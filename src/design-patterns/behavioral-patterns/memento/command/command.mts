export default interface Command {
  getName(): string;
  execute(): void;
}
