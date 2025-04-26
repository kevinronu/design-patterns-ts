import { Device } from "../../abstractions/index.mjs";

export default class Radio implements Device {
  private on: boolean;
  private volume: number;
  private channel: number;

  public constructor() {
    this.on = false;
    this.volume = 50;
    this.channel = 1;
  }

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    if (this.volume > 100) {
      this.volume = 100;

      return;
    }

    if (this.volume < 0) {
      this.volume = 0;

      return;
    }

    this.volume = percent;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }

  printStatus(): void {
    console.log(`
------------------------------------
| 📺 I'm a TV set.
| 🔌 I'm ${this.on ? "enabled ✅" : "disabled ❌"}
| 🔊 Current volume is ${this.volume}%
| 📺 Current channel is ${this.channel}
------------------------------------`);
  }
}
