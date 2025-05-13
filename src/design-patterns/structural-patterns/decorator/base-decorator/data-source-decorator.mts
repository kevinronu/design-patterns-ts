import { DataSource } from "../interfaces/index.mjs";

export default abstract class DataSourceDecorator implements DataSource {
  protected readonly wrappee: DataSource;

  public constructor(dataSource: DataSource) {
    this.wrappee = dataSource;
  }

  public writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  public readData(): string {
    return this.wrappee.readData();
  }
}
