import {
  CrewLogEntry,
  CrewMember,
  CrewRole,
  Spaceship,
} from "../creational-design-patterns/prototype/index.mjs";

export default function prototypeDemo(): void {
  const alice = new CrewMember("Alice", CrewRole.Pilot);
  const bob = new CrewMember("Bob", CrewRole.Engineer);

  const originalSpaceship = new Spaceship("Orion");

  const entry1 = new CrewLogEntry(
    "entry-alice",
    alice,
    {
      missionName: "MoonLanding",
      durationInDays: 10,
    },
    originalSpaceship
  );

  const entry2 = new CrewLogEntry(
    "entry-bob",
    bob,
    {
      missionName: "MarsSurvey",
      durationInDays: 90,
    },
    originalSpaceship
  );

  originalSpaceship.crewLog.push(entry1);
  originalSpaceship.crewLog.push(entry2);

  const clonedSpaceship = originalSpaceship.clone();

  console.log("🚀 Original Ship:", originalSpaceship._name);

  originalSpaceship.crewLog.forEach((crewLogEntry, i) => {
    console.log(
      `  Entry ${i + 1}: ${crewLogEntry._label}, Mission: ${
        crewLogEntry._missionData?.missionName
      }, AssignedShip: ${crewLogEntry._assignedSpaceship?._name}`
    );
  });

  console.log("\n🧪 Cloned Ship:", clonedSpaceship._name);

  clonedSpaceship.crewLog.forEach((clonedCrewLogEntry, i) => {
    console.log(
      `  Entry ${i + 1}: ${clonedCrewLogEntry._label}, Mission: ${
        clonedCrewLogEntry._missionData?.missionName
      }, AssignedShip: ${clonedCrewLogEntry._assignedSpaceship?._name}`
    );
  });
}
