import { Remote } from "../../abstractions/index.mjs";

export default class BasicRemoteControl extends Remote {
  power(): void {
    console.log("Remote: power toggle 🔌");

    if (this.device.isEnabled()) {
      this.device.disable();

      return;
    }

    this.device.enable();
  }

  volumeDown(): void {
    console.log("Remote: volume down 🔉");

    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    console.log("Remote: volume up 🔊");

    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    console.log("Remote: channel down ⬇️");

    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    console.log("Remote: channel up ⬆️");

    this.device.setChannel(this.device.getChannel() + 1);
  }
}
