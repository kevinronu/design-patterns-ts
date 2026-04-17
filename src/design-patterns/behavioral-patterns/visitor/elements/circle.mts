import type { Visitor } from "../visitors/index.mjs";
import { Dot } from "./index.mjs";

export default class Circle extends Dot {
  public readonly radius: number;

  public constructor(id: number, x: number, y: number, radius: number) {
    super(id, x, y);
    this.radius = radius;
  }

  public accept(visitor: Visitor): string {
    return visitor.visitCircle(this);
  }
}
