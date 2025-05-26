import { Tree, TreeTypeFactory } from "./tree/index.mjs";

// Collection of tree instances
export default class Forest {
  private trees: Tree[] = [];

  public plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ): void {
    const type = TreeTypeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public draw(): void {
    for (const tree of this.trees) {
      tree.draw();
    }
  }
}
