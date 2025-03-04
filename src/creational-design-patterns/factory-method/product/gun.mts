export interface Gun {
  getType(): GunType;
  fire(): void;
  specialMove(): void;
}

export enum GunType {
  AK47 = "AK47",
  Musket = "Musket",
}
