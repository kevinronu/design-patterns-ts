import type { Visitor } from "../visitors/index.mjs";
import type { Shape } from "./index.mjs";

export default class Dot implements Shape {
  public readonly id: number;
  public readonly x: number;
  public readonly y: number;

  public constructor(id: number, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  public move(x: number, y: number): void {
    // Move dot
  }

  public draw(): void {
    // Draw dot
  }

  public accept(visitor: Visitor): string {
    return visitor.visitDot(this);
  }
}
