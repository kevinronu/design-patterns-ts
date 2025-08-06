import { Component, EventType } from "../components/index.mjs";

export default interface Mediator {
  register(component: Component): void;
  notify(sender: Component, event: EventType, data?: unknown): void;
}
