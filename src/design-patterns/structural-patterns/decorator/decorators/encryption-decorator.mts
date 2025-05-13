import { DataSourceDecorator } from "../base-decorator/index.mjs";
import { DataSource } from "../interfaces/index.mjs";

export default class EncryptionDecorator extends DataSourceDecorator {
  public constructor(dataSource: DataSource) {
    super(dataSource);
  }

  public writeData(data: string): void {
    // Step 1: Transform the input data using this decorator's encoding logic
    const transformed = this.encode(data);

    // Step 2: Delegate the writing of transformed data to the wrapped component
    super.writeData(transformed);
  }

  public readData(): string {
    // Step 1: Read data from the wrapped component (possibly encoded by this decorator)
    const rawData = super.readData();

    // Step 2: Apply this decorator's decoding logic to retrieve original content
    const result = this.decode(rawData);

    return result;
  }

  private encode(data: string): string {
    const result = Uint8Array.from(
      data.split("").map((c) => c.charCodeAt(0) + 1)
    );

    return btoa(String.fromCharCode(...result));
  }

  private decode(data: string): string {
    const decoded = atob(data);

    return decoded
      .split("")
      .map((c) => String.fromCharCode(c.charCodeAt(0) - 1))
      .join("");
  }
}
