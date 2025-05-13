import { DataSourceDecorator } from "../base-decorator/index.mjs";
import { DataSource } from "../interfaces/index.mjs";

export default class CompressionDecorator extends DataSourceDecorator {
  public constructor(dataSource: DataSource) {
    super(dataSource);
  }

  public writeData(data: string): void {
    // Step 1: Compress and encode the data using this decorator's logic
    const compressed = this.compress(data);

    // Step 2: Delegate to the wrapped component
    super.writeData(compressed);
  }

  public readData(): string {
    // Step 1: Read data from the wrapped component
    const stored = super.readData();

    // Step 2: Decode and decompress to restore original content
    const result = this.decompress(stored);

    return result;
  }

  /**
   * Simulates compression by reversing the string and encoding it in Base64.
   * This mimics binary-safe storage after compression.
   */
  private compress(data: string): string {
    const reversed = data.split("").reverse().join("");
    return btoa(reversed); // Convert to Base64 to simulate binary-safe storage
  }

  /**
   * Simulates decompression by decoding Base64 and reversing the string.
   * This restores the original text.
   */
  private decompress(data: string): string {
    const decoded = atob(data);
    return decoded.split("").reverse().join("");
  }
}
