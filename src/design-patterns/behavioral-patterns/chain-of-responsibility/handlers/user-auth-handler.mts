import { BaseHandler, Server } from "./index.mjs";

/**
 * UserAuthHandler checks if the user exists and the password is correct.
 */
export default class UserAuthHandler extends BaseHandler {
  private readonly server: Server;

  constructor(server: Server) {
    super();
    this.server = server;
  }

  public handle(email: string, password: string): boolean {
    if (!this.server.hasEmail(email)) {
      console.log("🚫 Email not registered.");

      return false;
    }

    if (!this.server.isValidPassword(email, password)) {
      console.log("🚫 Incorrect password.");

      return false;
    }

    return super.handle(email, password);
  }
}
