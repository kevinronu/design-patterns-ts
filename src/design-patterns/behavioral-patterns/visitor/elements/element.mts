import type { Visitor } from "../visitors/index.mjs";

export default interface Shape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: Visitor): string;
}
