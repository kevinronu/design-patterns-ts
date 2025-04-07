import { CarType } from "./index.mjs";
import {
  Transmission,
  TripComputer,
  Engine,
  GPSNavigator,
} from "../components/index.mjs";

export default class Car {
  readonly _type: CarType;
  readonly _seats: number;
  readonly _engine: Engine;
  readonly _transmission: Transmission;
  readonly _tripComputer: TripComputer | null;
  readonly _gpsNavigator: GPSNavigator;
  public fuel = 0;

  constructor(
    carType: CarType,
    seats: number,
    engine: Engine,
    transmission: Transmission,
    tripComputer: TripComputer | null,
    gpsNavigator: GPSNavigator
  ) {
    this._type = carType;
    this._seats = seats;
    this._engine = engine;
    this._transmission = transmission;

    this._tripComputer = tripComputer;
    if (this._tripComputer != null) {
      this._tripComputer.setCar(this);
    }

    this._gpsNavigator = gpsNavigator;
  }
}
