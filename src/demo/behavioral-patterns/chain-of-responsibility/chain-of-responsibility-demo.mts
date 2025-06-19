import { Server } from "../../../design-patterns/behavioral-patterns/chain-of-responsibility/server/index.mjs";
import {
  RateLimitHandler,
  UserAuthHandler,
  RoleCheckHandler,
} from "../../../design-patterns/behavioral-patterns/chain-of-responsibility/handlers/index.mjs";

const server = new Server();
server.register("admin@example.com", "admin_pass");
server.register("user@example.com", "user_pass");

// Set up chain
const handlerChain = new RateLimitHandler(2);

handlerChain
  .setNext(new UserAuthHandler(server))
  .setNext(new RoleCheckHandler());

server.setHandler(handlerChain);

export default function chainOfResponsibilityDemo(
  email: string,
  password: string
): boolean {
  return server.logIn(email, password);
}

export function runPeriodically(intervalMs: number, callback: () => boolean) {
  let internalID = setInterval(() => {
    let success = callback();

    if (success) {
      clearInterval(internalID);
    }
  }, intervalMs);
}
