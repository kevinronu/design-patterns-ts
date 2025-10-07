import type { Visitor } from "../visitors/index.mjs";
import type { Shape } from "./index.mjs";

export default class CompoundShape implements Shape {
  public readonly id: number;
  public children: Shape[] = [];

  public constructor(id: number) {
    this.id = id;
  }

  public move(x: number, y: number): void {
    // Move compound shape
  }

  public draw(): void {
    // Draw compound shape
  }

  public accept(visitor: Visitor): string {
    return visitor.visitCompoundGraphic(this);
  }

  public add(shape: Shape): void {
    this.children.push(shape);
  }
}
