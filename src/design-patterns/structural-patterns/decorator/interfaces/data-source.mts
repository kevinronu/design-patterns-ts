export default interface DataSource {
  writeData(data: string): void;
  readData(): string;
}
