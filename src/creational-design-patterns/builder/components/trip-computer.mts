import { Car } from "../product/index.mjs";

export default class TripComputer {
  private car: Car | null = null;

  public setCar(car: Car) {
    this.car = car;
  }

  public showFuelLevel(): void {
    console.log(`Fuel level: ${this.car?.fuel}`);
  }

  public showStatus(): void {
    if (this.car?._engine?.isStarted()) {
      console.log("Car is started");

      return;
    }

    console.log("Car isn't started");
  }
}
