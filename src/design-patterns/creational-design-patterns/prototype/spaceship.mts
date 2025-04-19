import { Prototype, CrewLogEntry } from "./index.mjs";

export default class Spaceship implements Prototype<Spaceship> {
  public readonly _name: string;
  public crewLog: CrewLogEntry[] = [];

  constructor(name: string, crewLog?: CrewLogEntry[]) {
    this._name = name;

    if (crewLog) {
      this.crewLog = crewLog;
    }
  }

  public clone(): Spaceship {
    const clonedCrewLog = this.crewLog.map((crewLogEntry) => {
      const clonedCrewLogEntry = crewLogEntry.clone(); // Clone without assignedShip

      return clonedCrewLogEntry;
    });

    const clonedSpaceship = new Spaceship(this._name + "_clone", clonedCrewLog);

    clonedSpaceship.crewLog = clonedSpaceship.crewLog.map(
      (clonedCrewLogEntry) => {
        let assignedShipForClonedEntry: Spaceship | null = null;

        if (clonedCrewLogEntry._assignedSpaceship) {
          assignedShipForClonedEntry = clonedCrewLogEntry._assignedSpaceship;
        }

        return new CrewLogEntry(
          clonedCrewLogEntry._label,
          clonedCrewLogEntry._crewMember,
          clonedCrewLogEntry._missionData,
          assignedShipForClonedEntry
        ); // Fixes circular reference by assigning the cloned spaceship
      }
    );

    return clonedSpaceship;
  }
}
