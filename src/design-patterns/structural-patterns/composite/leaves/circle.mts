import { Dot } from "./index.mjs";

export default class Circle extends Dot {
  private readonly radius: number;

  public constructor(posX: number, posY: number, radius: number) {
    super(posX, posY);
    this.radius = radius;
  }

  public draw(): void {
    console.log(
      `⚪ Drawing Circle at (${this.posX}, ${this.posY}) with radius ${this.radius}`
    );
  }
}
