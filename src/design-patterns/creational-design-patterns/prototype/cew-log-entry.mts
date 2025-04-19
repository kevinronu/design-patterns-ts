import { CrewMember, Prototype, Spaceship } from "./index.mjs";

type MissionData = {
  missionName: string;
  durationInDays: number;
};

export default class CrewLogEntry implements Prototype<CrewLogEntry> {
  public readonly _label: string;
  public readonly _crewMember: CrewMember;
  public readonly _assignedSpaceship: Spaceship | null = null;
  public readonly _missionData: MissionData | null = null;

  constructor(
    label: string,
    crewMember: CrewMember,
    missionData: MissionData | null = null,
    assignedSpaceship: Spaceship | null = null
  ) {
    this._label = label;
    this._crewMember = crewMember;
    this._missionData = missionData;
    this._assignedSpaceship = assignedSpaceship;
  }

  public clone(): CrewLogEntry {
    const clonedCrewMember = this._crewMember.clone(); // Clone without shared references

    let clonedMissionData: MissionData | null = null;

    if (this._missionData) {
      clonedMissionData = {
        ...this._missionData,
        missionName: this._missionData.missionName + "_cloned",
      };
    }

    const clone = new CrewLogEntry(
      this._label + "_cloned",
      clonedCrewMember,
      clonedMissionData,
      null
    ); // Clone without shared references
    // The assignedShip reference is fixed in Spaceship.clone using the spread operator

    return clone;
  }
}
