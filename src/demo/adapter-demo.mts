import {
  RoundHole,
  RoundPeg,
  SquarePeg,
  SquarePegAdapter,
} from "../design-patterns/structural-patterns/adapter/index.mjs";

export default function adapterDemo() {
  const roundPeg = new RoundPeg(5);
  const squarePeg = new SquarePeg(5);

  const roundHole = new RoundHole(5);

  console.log("Does the round peg fit?");
  console.log(roundHole.fits(roundPeg));

  const squarePegAdapter = new SquarePegAdapter(squarePeg);
  console.log("Does the square peg fit?");
  console.log(roundHole.fits(squarePegAdapter));
}
