import type { Visitor } from "../visitors/index.mjs";
import type { Shape } from "./index.mjs";

export default class Rectangle implements Shape {
  public readonly id: number;
  public readonly x: number;
  public readonly y: number;
  public readonly width: number;
  public readonly height: number;

  public constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public move(x: number, y: number): void {
    // Move rectangle
  }

  public draw(): void {
    // Draw rectangle
  }

  public accept(visitor: Visitor): string {
    return visitor.visitRectangle(this);
  }
}
