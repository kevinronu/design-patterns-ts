import { Gun, GunType } from "./gun.mjs";

export default class Musket implements Gun {
  readonly owner: string;
  private readonly _power = 2;

  constructor(owner: string) {
    this.owner = owner;
  }

  getType(): GunType {
    return GunType.Musket;
  }

  fire(): void {
    console.log(`${this.owner} fired and caused ${this._power} damage`);
  }

  specialMove(): void {
    console.log(
      `${this.owner} performs a precision shot, doubling the damage to ${
        this._power * 2
      }`
    );
  }
}
