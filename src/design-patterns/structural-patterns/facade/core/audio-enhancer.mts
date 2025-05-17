import { MediaFile } from "./index.mjs";

export default class AudioEnhancer {
  public fix(file: MediaFile): string {
    console.log("🎵 AudioEnhancer: fixing audio...");

    return "temporary-output-file.tmp";
  }
}
