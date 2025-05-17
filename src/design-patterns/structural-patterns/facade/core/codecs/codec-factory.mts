import { MediaFile } from "../index.mjs";
import { Codec, CodecType, Mpeg4Codec, OggCodec } from "./index.mjs";

export default class CodecFactory {
  static extract(file: MediaFile): Codec {
    switch (file.codecType) {
      case CodecType.MP4:
        console.log("🔍 CodecFactory: extracting MPEG4 codec...");
        return new Mpeg4Codec();
      case CodecType.OGG:
        console.log("🔍 CodecFactory: extracting OGG codec...");
        return new OggCodec();
      default:
        throw new Error(`Unsupported codec type: ${file.codecType}`);
    }
  }

  static createTargetCodec(type: CodecType): Codec {
    switch (type) {
      case CodecType.MP4:
        return new Mpeg4Codec();
      case CodecType.OGG:
        return new OggCodec();
    }
  }
}
