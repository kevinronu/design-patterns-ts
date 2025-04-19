import {
  Engine,
  GPSNavigator,
  Transmission,
  TripComputer,
} from "../components/index.mjs";
import { CarType } from "./car-type.mjs";

export default class CarManual {
  readonly _type: CarType;
  readonly _seats: number;
  readonly _engine: Engine;
  readonly _transmission: Transmission;
  readonly _tripComputer: TripComputer | null;
  readonly _gpsNavigator: GPSNavigator;

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
    this._gpsNavigator = gpsNavigator;
  }

  public getInformation(): string {
    let info = "";
    info += "Type of car: " + this._type + "\n";
    info += "Count of seats: " + this._seats + "\n";
    info +=
      "Engine: volume - " +
      this._engine._volume +
      "; mileage - " +
      this._engine.getMillage() +
      "\n";
    info += "Transmission: " + this._transmission + "\n";

    if (this._tripComputer != null) {
      info += "Trip Computer: Functional" + "\n";
    } else {
      info += "Trip Computer: N/A" + "\n";
    }

    if (this._gpsNavigator != null) {
      info += "GPS Navigator: Functional" + "\n";
    } else {
      info += "GPS Navigator: N/A" + "\n";
    }

    return info;
  }
}
