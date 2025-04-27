import { SquarePeg } from "../../design-patterns/structural-patterns/adapter/simple/adaptee/index.mjs";
import { SquarePegAdapter } from "../../design-patterns/structural-patterns/adapter/simple/adapter/index.mjs";
import {
  RoundHole,
  RoundPeg,
} from "../../design-patterns/structural-patterns/adapter/simple/target/index.mjs";

import { createApp } from "../../design-patterns/structural-patterns/adapter/complex/config/index.mjs";

export function simpleAdapterDemo() {
  const roundPeg = new RoundPeg(5);
  const squarePeg = new SquarePeg(5);

  const roundHole = new RoundHole(5);

  console.log("Does the round peg fit?");
  console.log(roundHole.fits(roundPeg));

  const squarePegAdapter = new SquarePegAdapter(squarePeg);
  console.log("Does the square peg fit?");
  console.log(roundHole.fits(squarePegAdapter));
}

export async function complexAdapterDemo() {
  const app = createApp();

  await app.checkout({
    orderId: "ORDER-001",
    customerId: "USER-A",
    amount: 800,
    currency: "USD",
  });

  await app.checkout({
    orderId: "ORDER-002",
    customerId: "USER-B",
    amount: 2500,
    currency: "USD",
  });
}
