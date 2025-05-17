import { CodecType } from "./codecs/index.mjs";

export default class MediaFile {
  private static readonly extensionMap: Record<string, CodecType> = {
    mp4: CodecType.MP4,
    ogg: CodecType.OGG,
    // webm: CodecType.WEBM,
    // avi: CodecType.AVI,
  };

  public readonly name: string;
  public readonly codecType: CodecType;

  public constructor(name: string) {
    this.name = name;

    const extension = name.split(".").pop() ?? "";
    const codec = MediaFile.extensionMap[extension];

    if (!codec) {
      throw new Error(`❌ Unsupported media file extension: .${extension}`);
    }

    this.codecType = codec;
  }
}
