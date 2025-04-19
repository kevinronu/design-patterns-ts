import {
  GPSNavigator,
  TripComputer,
  Engine,
  Transmission,
} from "../components/index.mjs";
import { Car, CarType } from "../product/index.mjs";
import { Builder } from "./index.mjs";

export default class CarBuilder implements Builder {
  private carType: CarType | null = null;
  private seats: number | null = null;
  private engine: Engine | null = null;
  private transmission: Transmission | null = null;
  private tripComputer: TripComputer | null = null;
  private gpsNavigator: GPSNavigator | null = null;

  public reset(): Builder {
    this.carType = null;
    this.seats = null;
    this.engine = null;
    this.transmission = null;
    this.tripComputer = null;
    this.gpsNavigator = null;

    return this;
  }

  public setCarType(carType: CarType): Builder {
    this.carType = carType;

    return this;
  }

  public setSeats(seats: number): Builder {
    this.seats = seats;

    return this;
  }

  public setEngine(engine: Engine): Builder {
    this.engine = engine;

    return this;
  }

  public setTransmission(transmission: Transmission): Builder {
    this.transmission = transmission;

    return this;
  }

  public setTripComputer(tripComputer: TripComputer): Builder {
    this.tripComputer = tripComputer;

    return this;
  }

  public setGPSNavigator(gpsNavigator: GPSNavigator): Builder {
    this.gpsNavigator = gpsNavigator;

    return this;
  }

  public getProduct(): Car {
    if (
      this.carType === null ||
      this.seats === null ||
      this.engine === null ||
      this.transmission === null ||
      this.gpsNavigator === null
    ) {
      throw new Error("missing required fields to build Car");
    }

    const car = new Car(
      this.carType,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gpsNavigator
    );

    this.reset();

    return car;
  }
}
