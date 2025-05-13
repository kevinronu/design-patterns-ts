import { DataSource } from "../interfaces/index.mjs";

export default class FileDataSource implements DataSource {
  private readonly name: string;
  private static fileStorage: Record<string, string> = {};

  constructor(name: string) {
    this.name = name;
  }

  writeData(data: string): void {
    FileDataSource.fileStorage[this.name] = data;
  }

  readData(): string {
    return FileDataSource.fileStorage[this.name] || "";
  }
}
