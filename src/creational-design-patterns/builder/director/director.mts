import { Builder } from "../builder/index.mjs";
import {
  Engine,
  GPSNavigator,
  Transmission,
  TripComputer,
} from "../components/index.mjs";
import { CarType } from "../product/index.mjs";

export default class Director {
  public buildSportsCar(builder: Builder) {
    builder
      .setCarType(CarType.SportCar)
      .setSeats(2)
      .setEngine(new Engine(3.0))
      .setTransmission(Transmission.SemiAutomatic)
      .setTripComputer(new TripComputer())
      .setGPSNavigator(new GPSNavigator());
  }

  public buildCityCar(builder: Builder) {
    builder
      .setCarType(CarType.CityCar)
      .setSeats(4)
      .setEngine(new Engine(1.2))
      .setTransmission(Transmission.Automatic)
      .setTripComputer(new TripComputer())
      .setGPSNavigator(new GPSNavigator());
  }

  public buildSUV(builder: Builder) {
    builder
      .setCarType(CarType.SUV)
      .setSeats(4)
      .setEngine(new Engine(2.5))
      .setTransmission(Transmission.Automatic)
      .setGPSNavigator(new GPSNavigator());
  }
}
