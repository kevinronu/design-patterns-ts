import { Event } from "../events/index.mjs";

/** Observer: reacts to events. */
export default interface Observer<TPayload = unknown> {
  update(event: Event<TPayload>): void;
}
