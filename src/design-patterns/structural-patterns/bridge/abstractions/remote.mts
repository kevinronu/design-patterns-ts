import { Device } from "./index.mjs";

export default abstract class Remote {
  protected device: Device; // Needs to be accessed from inherited classes

  public constructor(device: Device) {
    this.device = device;
  }

  abstract power(): void;

  abstract volumeDown(): void;

  abstract volumeUp(): void;

  abstract channelDown(): void;

  abstract channelUp(): void;
}
