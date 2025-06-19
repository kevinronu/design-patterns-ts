import { BaseHandler } from "./index.mjs";

/**
 * RoleCheckHandler outputs role-based messages.
 */
export default class RoleCheckHandler extends BaseHandler {
  public handle(email: string, password: string): boolean {
    if (email === "admin@example.com") {
      console.log("👋 Hello, admin!");

      return true;
    }

    console.log("👋 Hello, user!");

    return super.handle(email, password);
  }
}
