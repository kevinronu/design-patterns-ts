import { Handler } from "./index.mjs";

/**
 * BaseHandler implements chaining behavior. Concrete handlers will extend this.
 */
export default abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(email: string, password: string): boolean {
    if (this.nextHandler) {
      return this.nextHandler.handle(email, password);
    }

    return true;
  }
}
