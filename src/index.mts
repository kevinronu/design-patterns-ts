import {
  chainOfResponsibilityDemo,
  runPeriodically,
} from "./demo/behavioral-patterns/chain-of-responsibility/index.mjs";

runPeriodically(500, () =>
  chainOfResponsibilityDemo("admin@example.com", "wrong_pass")
);
