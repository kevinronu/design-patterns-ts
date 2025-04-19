import { Gun } from "../product/gun.mjs";

export default abstract class Factory {
  abstract createGun(owner: string): Gun;

  oneTimeAction(temporaryOwner: string): void {
    const gun = this.createGun(temporaryOwner);
    console.log(`${temporaryOwner} is temporarily using a ${gun.getType()}`);
    gun.fire();
    gun.specialMove();
  }
}
