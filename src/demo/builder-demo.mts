import { CarBuilder } from "../creational-design-patterns/builder/builder/index.mjs";
import { Director } from "../creational-design-patterns/builder/director/index.mjs";

export default function builderDemo(): void {
  const director = new Director();
  const carBuilder = new CarBuilder();

  director.buildSportsCar(carBuilder);
  const sportsCar = carBuilder.getProduct();
  console.log(sportsCar._type);

  director.buildCityCar(carBuilder);
  const cityCar = carBuilder.getProduct();
  console.log(cityCar._type);

  director.buildSUV(carBuilder);
  const suv = carBuilder.getProduct();
  console.log(suv._type);
}
