import { Event } from "../events/index.mjs";
import { Observer } from "../observers/index.mjs";

/** Subject: manages observers and notifies them. */
export default interface Subject<TPayload = unknown> {
  addObserver(observer: Observer<TPayload>): void;
  removeObserver(observer: Observer<TPayload>): void;
  notify(event: Event<TPayload>): void;
}
