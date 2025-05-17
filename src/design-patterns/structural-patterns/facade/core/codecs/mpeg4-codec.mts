import { CodecType, type Codec } from "./index.mjs";
import type { MediaFile } from "../index.mjs";

export default class Mpeg4Codec implements Codec {
  public getType(): CodecType {
    return CodecType.MP4;
  }

  public compress(file: MediaFile): MediaFile {
    console.log("🗜️ Mpeg4Codec: compressing media file...");
    return file;
  }

  public decompress(file: MediaFile): MediaFile {
    console.log("📂 Mpeg4Codec: decompressing media file...");
    return file;
  }
}
