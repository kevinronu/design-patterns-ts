import {
  CarBuilder,
  CarManualBuilder,
} from "../../design-patterns/creational-design-patterns/builder/builder/index.mjs";
import { Director } from "../../design-patterns/creational-design-patterns/builder/director/index.mjs";

export default function builderDemo(): void {
  const director = new Director();
  const carBuilder = new CarBuilder();
  const carManualBuilder = new CarManualBuilder();

  director.buildSportsCar(carBuilder);
  const sportsCar = carBuilder.getProduct();
  console.log(sportsCar._type);

  director.buildSportsCar(carManualBuilder);
  const sportsCarManual = carManualBuilder.getProduct();
  console.log(sportsCarManual.getInformation());

  director.buildCityCar(carBuilder);
  const cityCar = carBuilder.getProduct();
  console.log(cityCar._type);

  director.buildCityCar(carManualBuilder);
  const cityCarManual = carManualBuilder.getProduct();
  console.log(cityCarManual.getInformation());

  director.buildSUV(carBuilder);
  const suv = carBuilder.getProduct();
  console.log(suv._type);

  director.buildSUV(carManualBuilder);
  const suvCarManual = carManualBuilder.getProduct();
  console.log(suvCarManual.getInformation());
}
