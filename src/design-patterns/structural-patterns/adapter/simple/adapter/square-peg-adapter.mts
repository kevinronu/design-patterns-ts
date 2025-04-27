import { SquarePeg } from "../adaptee/index.mjs";
import { CircularShape } from "../target/index.mjs";

export default class SquarePegAdapter implements CircularShape {
  private readonly squarePeg: SquarePeg;

  public constructor(squarePeg: SquarePeg) {
    this.squarePeg = squarePeg;
  }

  public getRadius(): number {
    return (Math.pow(this.squarePeg.side, 2) * Math.sqrt(2)) / 2;
  }
}
