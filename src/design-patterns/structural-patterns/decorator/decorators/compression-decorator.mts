import { DataSourceDecorator } from "../base-decorator/index.mjs";
import { DataSource } from "../interfaces/index.mjs";

export default class CompressionDecorator extends DataSourceDecorator {
  public constructor(dataSource: DataSource) {
    super(dataSource);
  }

  public writeData(data: string): void {
    // Step 1: Apply this decorator's transformation (simulate compression by reversing the string)
    const transformed = data.split("").reverse().join("");

    // Step 2: Encode the transformed string into Base64 to mimic binary-safe storage
    const encoded = btoa(transformed);

    // Step 3: Delegate the writing of the encoded data to the wrapped data source
    super.writeData(encoded);
  }

  public readData(): string {
    // Step 1: Read the raw data from the wrapped component
    const rawData = super.readData();

    // Step 2: Decode from Base64
    const compressed = atob(rawData);

    // Step 3: Simulate decompression by reversing the string
    const original = compressed.split("").reverse().join("");

    return original;
  }
}
