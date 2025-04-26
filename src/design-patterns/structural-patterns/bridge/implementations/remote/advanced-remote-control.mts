import { BasicRemoteControl } from "./index.mjs";

export default class AdvancedRemoteControl extends BasicRemoteControl {
  public mute(): void {
    console.log("Remote: mute 🔇");

    this.device.setVolume(0);
  }
}
