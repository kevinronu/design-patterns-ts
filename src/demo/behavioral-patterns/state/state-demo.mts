import { Context } from "../../../design-patterns/behavioral-patterns/state/context/index.mjs";

export default function stateDemo() {
  const car = new Context();

  console.log(car.start()); // Off → Idle
  console.log(car.accelerate()); // Idle → Driving
  console.log(car.accelerate()); // Driving
  console.log(car.emergencyBrake()); // Driving → Emergency
  console.log(car.accelerate()); // Blocked
  console.log(car.start()); // Emergency → Idle
  console.log(car.stop()); // Idle → Off
}
