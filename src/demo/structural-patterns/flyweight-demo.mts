import Forest from "../../design-patterns/structural-patterns/flyweight/forest.mjs";

function random(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default function flyweightDemo() {
  const CANVAS_SIZE = 500;
  const TREES_TO_DRAW = 1000000;
  const TREE_TYPES = 2;

  const forest = new Forest();

  for (let i = 0; i < TREES_TO_DRAW / TREE_TYPES; i++) {
    forest.plantTree(
      random(0, CANVAS_SIZE),
      random(0, CANVAS_SIZE),
      "Summer Oak",
      "green",
      "Oak texture stub"
    );

    forest.plantTree(
      random(0, CANVAS_SIZE),
      random(0, CANVAS_SIZE),
      "Autumn Oak",
      "orange",
      "Autumn Oak texture stub"
    );
  }

  forest.draw();

  console.log(`${TREES_TO_DRAW} trees drawn`);
  console.log("---------------------");
  console.log("Memory usage:");
  console.log(`Tree size (8 bytes) * ${TREES_TO_DRAW}`);
  console.log(`+ TreeTypes size (~30 bytes) * ${TREE_TYPES}`);
  console.log("---------------------");
  console.log(
    `Total: ${(TREES_TO_DRAW * 8 + TREE_TYPES * 30) / 1024 / 1024}MB`
  );
  console.log(
    `Instead of ${(TREES_TO_DRAW * 38) / 1024 / 1024}MB without Flyweight`
  );
}
