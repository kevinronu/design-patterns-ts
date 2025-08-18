import { State } from "./index.mjs";

export default interface Originator {
  setState(snapshot: State): void;
  getState(): State;
}
