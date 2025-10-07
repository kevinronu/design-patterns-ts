import type {
  Dot,
  Circle,
  Rectangle,
  CompoundShape,
} from "../elements/index.mjs";

export default interface Visitor {
  visitDot(dot: Dot): string;
  visitCircle(circle: Circle): string;
  visitRectangle(rectangle: Rectangle): string;
  visitCompoundGraphic(compound: CompoundShape): string;
}
