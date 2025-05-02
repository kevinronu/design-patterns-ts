import { CompoundGraphic } from "../../design-patterns/structural-patterns/composite/composites/index.mjs";
import {
  Dot,
  Circle,
} from "../../design-patterns/structural-patterns/composite/leaves/index.mjs";

export default function compositeDemo(): void {
  const dot = new Dot(2, 4);
  const circle = new Circle(5, 8, 10);

  const compound = new CompoundGraphic();
  compound.add(dot);
  compound.add(circle);

  console.log("🎬 Initial Drawing:");
  compound.draw();

  const deltaX = 10;
  const deltaY = 10;

  console.log(`🛠️  Moving all graphics by (${deltaX}, ${deltaY})...`);
  compound.move(deltaX, deltaY);

  console.log("🔁 Redrawing after move:");
  compound.draw();
}
