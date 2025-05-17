import { CodecType } from "../../design-patterns/structural-patterns/facade/core/codecs/index.mjs";
import { MediaConverterFacade } from "../../design-patterns/structural-patterns/facade/facade/index.mjs";

export default function facadeDemo() {
  const facade = new MediaConverterFacade();
  facade.convertMedia("demo-video.ogg", CodecType.MP4);
}
