import { Prototype } from "./index.mjs";

export enum CrewRole {
  Pilot = "Pilot",
  Engineer = "Engineer",
  Scientist = "Scientist",
  Medic = "Medic",
  Security = "Security",
}

export default class CrewMember implements Prototype<CrewMember> {
  public readonly _name: string;
  public readonly _role: CrewRole;

  constructor(name: string, crewRole: CrewRole) {
    this._name = name;
    this._role = crewRole;
  }

  public clone(): CrewMember {
    return new CrewMember(this._name + "_clone", this._role);
  }
}
