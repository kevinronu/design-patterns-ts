// Represents the shared (intrinsic) state of a tree
export default class TreeType {
  public readonly name: string;
  public readonly color: string;
  public readonly texture: string;

  public constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  public draw(x: number, y: number): void {
    // console.log(
    //   `🌳 Drawing '${this.name}' at (${x}, ${y}) with color ${this.color} and texture '${this.texture}'`
    // );
  }
}
