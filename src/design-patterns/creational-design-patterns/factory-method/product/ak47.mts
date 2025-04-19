import { Gun, GunType } from "./gun.mjs";

export default class AK47 implements Gun {
  readonly owner: string;
  private readonly _power = 4;

  constructor(owner: string) {
    this.owner = owner;
  }

  getType(): GunType {
    return GunType.AK47;
  }

  fire(): void {
    console.log(`${this.owner} fired and caused ${this._power} damage`);
  }

  specialMove(): void {
    console.log(
      `${this.owner} performs a burst fire, dealing  ${
        this._power * 3
      } damage rapidly`
    );
  }
}
