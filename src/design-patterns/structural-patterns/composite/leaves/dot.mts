import { Graphic } from "../interfaces/index.mjs";

export default class Dot implements Graphic {
  protected posX: number;
  protected posY: number;

  public constructor(posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
  }

  public move(x: number, y: number): void {
    this.posX += x;
    this.posY += y;
    console.log(`📍 Dot moved to (${this.posX}, ${this.posY})`);
  }

  public draw(): void {
    console.log(`🖊️  Drawing Dot at (${this.posX}, ${this.posY})`);
  }
}
