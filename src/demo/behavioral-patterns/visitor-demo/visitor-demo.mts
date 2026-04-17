import {
  Dot,
  Circle,
  Rectangle,
  CompoundShape,
  Shape,
} from "../../../design-patterns/behavioral-patterns/visitor/elements/index.mjs";
import { XMLExportVisitor } from "../../../design-patterns/behavioral-patterns/visitor/visitors/index.mjs";

function exportShapes(...shapes: Shape[]): void {
  const exportVisitor = new XMLExportVisitor();

  console.log(exportVisitor.export(...shapes));
}

export default function visitorDemo() {
  const dot = new Dot(1, 10, 55);
  const circle = new Circle(2, 23, 15, 10);
  const rectangle = new Rectangle(3, 10, 17, 20, 30);

  const compoundShape = new CompoundShape(4);
  compoundShape.add(dot);
  compoundShape.add(circle);
  compoundShape.add(rectangle);

  const nestedCompound = new CompoundShape(5);
  nestedCompound.add(dot);
  compoundShape.add(nestedCompound);

  exportShapes(circle, compoundShape);
}
