import {
  ScannerControl,
  ShieldsControl,
  ThrusterControl,
  WeaponsControl,
} from "../../../design-patterns/behavioral-patterns/mediator/components/index.mjs";
import { Bridge } from "../../../design-patterns/behavioral-patterns/mediator/mediators/index.mjs";

export default function mediatorDemo() {
  const thrusterControl = new ThrusterControl();
  const weaponsControl = new WeaponsControl();
  const shieldsControl = new ShieldsControl();
  const scannerControl = new ScannerControl();

  // 2️⃣ Create the Bridge and register panels
  const bridge = new Bridge();
  [thrusterControl, weaponsControl, shieldsControl, scannerControl].forEach(
    (panel) => bridge.register(panel)
  );

  console.log("\n--- CHAOTIC STARSHIP DEMO START ---\n");

  // 3️⃣ Drive the system by calling methods directly on your control variables
  // Ramp thrust to 90%  → forces shields down, auto-scan
  thrusterControl.setThrust(90);

  // Arm weapons      → caps thrust at 60%
  weaponsControl.toggleArm();

  // Try to push past cap
  thrusterControl.setThrust(80);

  // Toggle shields    → auto-disarms weapons (and if lowered, runs scanner)
  shieldsControl.toggleShields();

  // Explicit scan     → disable thrusters, pick anomaly, re-enable
  scannerControl.run();

  console.log("\n--- DEMO COMPLETE ---\n");
}
