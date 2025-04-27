import { CircularShape } from "./index.mjs";

export default class RoundPeg implements CircularShape {
  private readonly radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }
}
