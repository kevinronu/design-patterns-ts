import type { Visitor } from "./index.mjs";
import type {
  Dot,
  Circle,
  Rectangle,
  CompoundShape,
  Shape,
} from "../elements/index.mjs";

export default class XMLExportVisitor implements Visitor {
  public export(...shapes: Shape[]): string {
    let result = '<?xml version="1.0" encoding="utf-8"?>\n';
    for (const shape of shapes) {
      result += shape.accept(this) + "\n";
    }
    return result;
  }

  public visitDot(dot: Dot): string {
    return `<dot>
  <id>${dot.id}</id>
  <x>${dot.x}</x>
  <y>${dot.x}</y>
</dot>`;
  }

  public visitCircle(circle: Circle): string {
    return `<circle>
  <id>${circle.id}</id>
  <x>${circle.x}</x>
  <y>${circle.x}</y>
  <radius>${circle.radius}</radius>
</circle>`;
  }

  public visitRectangle(rectangle: Rectangle): string {
    return `<rectangle>
  <id>${rectangle.id}</id>
  <x>${rectangle.x}</x>
  <y>${rectangle.x}</y>
  <width>${rectangle.width}</width>
  <height>${rectangle.height}</height>
</rectangle>`;
  }

  public visitCompoundGraphic(compound: CompoundShape): string {
    let childrenXml = "";
    for (const child of compound.children) {
      const xml = child.accept(this).replace(/\n/g, "\n  ");
      childrenXml += "  " + xml + "\n";
    }
    return `<compound_graphic>
  <id>${compound.id}</id>
${childrenXml}</compound_graphic>`;
  }
}
