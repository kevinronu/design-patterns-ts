import type { MediaFile } from "./index.mjs";
import type { Codec } from "./codecs/index.mjs";

export default class BitrateProcessor {
  public static read(file: MediaFile, codec: Codec): MediaFile {
    console.log(
      `📥 BitrateProcessor: reading file with codec: ${codec.getType()}`
    );

    return codec.decompress(file);
  }

  public static convert(file: MediaFile, codec: Codec): MediaFile {
    console.log(
      `📤 BitrateProcessor: converting file with codec: ${codec.getType()}`
    );

    return codec.compress(file);
  }
}
