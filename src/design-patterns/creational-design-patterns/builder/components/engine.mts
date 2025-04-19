export default class Engine {
  readonly _volume: number;
  private millage: number = 0;
  private started: boolean = false;

  constructor(volume: number) {
    this._volume = volume;
  }

  public on(): void {
    this.started = true;
  }

  public off(): void {
    this.started = false;
  }

  public isStarted(): boolean {
    return this.started;
  }

  public go(millage: number): void {
    if (!this.started) {
      throw new Error("Cannot go(), you must start engine first!");
    }

    this.millage += millage;
  }

  public getMillage(): number {
    return this.millage;
  }
}
