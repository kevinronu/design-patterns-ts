import { CircularShape } from "./index.mjs";

export default class RoundHole {
  public readonly radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public fits(circularShape: CircularShape): boolean {
    return this.radius >= circularShape.getRadius();
  }
}
