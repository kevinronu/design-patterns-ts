import { Mediator } from "../mediators/index.mjs";
import { ComponentType } from "./index.mjs";

export default interface Component {
  setMediator(mediator: Mediator): void;
  getType(): ComponentType;
}
