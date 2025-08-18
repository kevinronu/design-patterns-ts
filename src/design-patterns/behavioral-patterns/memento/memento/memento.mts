export default interface Memento {
  restore(): void; // the memento knows how to revert
}
