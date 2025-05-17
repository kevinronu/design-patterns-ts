import { CodecType, type Codec } from "./index.mjs";
import type { MediaFile } from "../index.mjs";

export default class OggCodec implements Codec {
  getType(): CodecType {
    return CodecType.OGG;
  }

  compress(file: MediaFile): MediaFile {
    console.log("🗜️ OggCodec: compressing media file...");
    return file;
  }

  decompress(file: MediaFile): MediaFile {
    console.log("📂 OggCodec: decompressing media file...");
    return file;
  }
}
