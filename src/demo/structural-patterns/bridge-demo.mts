import { Device } from "../../design-patterns/structural-patterns/bridge/abstractions/index.mjs";
import {
  TV,
  Radio,
} from "../../design-patterns/structural-patterns/bridge/implementations/device/index.mjs";
import {
  BasicRemoteControl,
  AdvancedRemoteControl,
} from "../../design-patterns/structural-patterns/bridge/implementations/remote/index.mjs";

function testDevice(device: Device) {
  console.log("🧪 Tests with basic remote.");

  const basicRemote = new BasicRemoteControl(device);
  basicRemote.power();
  device.printStatus();

  console.log("🧪 Tests with advanced remote.");

  const advancedRemote = new AdvancedRemoteControl(device);
  advancedRemote.power();
  advancedRemote.mute();
  device.printStatus();
}

export default function bridgeDemo() {
  testDevice(new TV());
  testDevice(new Radio());
}
