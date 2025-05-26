import { TreeType } from "./index.mjs";

// Holds extrinsic state, shares intrinsic state via TreeType
export default class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  public draw(): void {
    this.type.draw(this.x, this.y);
  }
}
