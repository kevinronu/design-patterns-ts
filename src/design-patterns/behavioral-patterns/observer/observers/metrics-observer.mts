import { Event } from "../events/index.mjs";
import { Observer } from "../observers/index.mjs";

/** Tracks counts of events by type (stringified). */
export default class MetricsObserver<TPayload = unknown>
  implements Observer<TPayload>
{
  private readonly counters: Map<string, number> = new Map();

  public constructor(initialCounts?: Iterable<[string, number]>) {
    this.counters = new Map(initialCounts);
  }

  update(event: Event<TPayload>): void {
    const key = String(event.type);

    this.counters.set(key, (this.counters.get(key) ?? 0) + 1);

    console.log(`[MetricsObserver] Updated after ${key}:`);
    for (const [k, v] of this.counters.entries()) {
      console.log(`  ${k} => ${v}`);
    }
  }

  getCount(typeKey: string): number {
    return this.counters.get(typeKey) ?? 0;
  }
}
