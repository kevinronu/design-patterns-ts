import { Event } from "../events/index.mjs";
import { Observer } from "../observers/index.mjs";

export default class LoggerObserver<TPayload = unknown>
  implements Observer<TPayload>
{
  private readonly label: string;

  public constructor(label: string = "Logger") {
    this.label = label;
  }

  public update(event: Event<TPayload>): void {
    // eslint-disable-next-line no-console
    console.log(`[${this.label}] ${event.type}`, event.payload);
  }
}
