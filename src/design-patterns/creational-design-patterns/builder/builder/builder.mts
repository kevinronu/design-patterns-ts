import {
  Engine,
  GPSNavigator,
  Transmission,
  TripComputer,
} from "../components/index.mjs";
import { CarType } from "../product/index.mjs";

export default interface Builder {
  reset(): Builder;
  setCarType(carType: CarType): Builder;
  setSeats(seats: number): Builder;
  setEngine(engine: Engine): Builder;
  setTransmission(transmission: Transmission): Builder;
  setTripComputer(tripComputer: TripComputer): Builder;
  setGPSNavigator(gpsNavigator: GPSNavigator): Builder;
}
