import { EventType } from "./event-type.mjs";

/** Base event contract. */
export default interface Event<TPayload = unknown> {
  readonly type: EventType;
  readonly payload: TPayload;
}
