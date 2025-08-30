import { Event } from "../events/index.mjs";
import { Observer } from "../observers/index.mjs";
import { Subject } from "./index.mjs";

/** Concrete Subject: synchronous in-memory event bus. */
export default class EventBus<TPayload = unknown> implements Subject<TPayload> {
  private observers: Set<Observer<TPayload>> = new Set();

  public constructor(initialObservers?: Iterable<Observer<TPayload>>) {
    this.observers = new Set(initialObservers);
  }

  public addObserver(observer: Observer<TPayload>): void {
    this.observers.add(observer);
  }

  public removeObserver(observer: Observer<TPayload>): void {
    this.observers.delete(observer);
  }

  public notify(event: Event<TPayload>): void {
    // Defensive snapshot to avoid mutation-during-iteration pitfalls
    const observersSnapshot = Array.from(this.observers);

    for (const observers of observersSnapshot) {
      observers.update(event);
    }
  }
}
