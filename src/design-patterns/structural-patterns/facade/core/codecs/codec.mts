import type { MediaFile } from "../index.mjs";
import { CodecType } from "./index.mjs";

/**
 * Codec interface that defines the contract for compression behavior.
 */
export default interface Codec {
  /**
   * Returns the codec type (e.g., "mp4", "ogg").
   */
  getType(): CodecType;

  /**
   * Simulates compression of a media file.
   * @param file - The media file to compress.
   * @returns A compressed media file.
   */
  compress(file: MediaFile): MediaFile;

  /**
   * Simulates decompression of a media file.
   * @param file - The media file to decompress.
   * @returns A decompressed media file.
   */
  decompress(file: MediaFile): MediaFile;
}
