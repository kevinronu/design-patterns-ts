import { TreeType } from "./index.mjs";

// Factory to manage Flyweight objects
export default class TreeTypeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  public static getTreeType(
    name: string,
    color: string,
    texture: string
  ): TreeType {
    const key = `${name}_${color}_${texture}`;

    if (!this.treeTypes.has(key)) {
      // Creating new TreeType
      this.treeTypes.set(key, new TreeType(name, color, texture));
    }

    // Reusing existing TreeType: ${key}`);
    return this.treeTypes.get(key)!;
  }

  public static listTreeTypes(): void {
    console.log(`📦 TreeTypes count: ${this.treeTypes.size}`);

    for (const [key, _] of this.treeTypes) {
      console.log(`- ${key}`);
    }
  }
}
