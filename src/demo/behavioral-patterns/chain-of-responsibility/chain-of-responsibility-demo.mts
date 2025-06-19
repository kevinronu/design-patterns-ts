import { Server } from "../../../design-patterns/behavioral-patterns/chain-of-responsibility/server/index.mjs";
import {
  RateLimitHandler,
  UserAuthHandler,
  RoleCheckHandler,
} from "../../../design-patterns/behavioral-patterns/chain-of-responsibility/handlers/index.mjs";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function chainOfResponsibilityDemo(
  email: string,
  password: string
) {
  const server = new Server();
  server.register("admin@example.com", "admin_pass");
  server.register("user@example.com", "user_pass");

  // Set up chain
  const handlerChain = new RateLimitHandler(2);

  handlerChain
    .setNext(new UserAuthHandler(server))
    .setNext(new RoleCheckHandler());

  server.setHandler(handlerChain);

  let success = false;

  while (!success) {
    success = server.logIn(email, password);

    await sleep(500);
  }
}
