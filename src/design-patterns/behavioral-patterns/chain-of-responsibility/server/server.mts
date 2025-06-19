import { Handler } from "../handlers/index.mjs";

/**
 * AuthServer manages users and uses a chain of responsibility to validate logins.
 */
export default class Server {
  private users = new Map<string, string>();
  private handler: Handler | null = null;

  public setHandler(handler: Handler) {
    this.handler = handler;
  }

  public register(email: string, password: string) {
    this.users.set(email, password);
  }

  public logIn(email: string, password: string): boolean {
    if (!this.handler) throw new Error("Handler chain not set.");

    return this.handler.handle(email, password);
  }

  public hasEmail(email: string): boolean {
    return this.users.has(email);
  }

  public isValidPassword(email: string, password: string): boolean {
    return this.users.get(email) === password;
  }
}
