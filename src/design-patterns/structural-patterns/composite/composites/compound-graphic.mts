import { Graphic } from "../interfaces/index.mjs";

export default class CompoundGraphic implements Graphic {
  private children: Graphic[] = [];

  public add(child: Graphic): void {
    this.children.push(child);

    console.log(`➕ Added child to CompoundGraphic`);
  }

  public remove(child: Graphic): void {
    // let newChildren: Graphic[] = [];

    // for (const c of this.children) {
    //   if (c !== child) {
    //     newChildren.push(c);
    //   }
    // }

    // this.children = newChildren;

    this.children = this.children.filter((c) => {
      return c !== child;
    });

    console.log(`➖ Removed child from CompoundGraphic`);
  }

  public move(posX: number, posY: number): void {
    console.log(`🔀 Moving all children by (${posX}, ${posY})`);

    this.children.forEach((child) => child.move(posX, posY));
  }

  public draw(): void {
    console.log("🎨 --- Drawing Compound Graphic ---");
    this.children.forEach((child) => child.draw());
    console.log("✅ --- End Compound Graphic ---\n");
  }
}
