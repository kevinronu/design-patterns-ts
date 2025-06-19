export default interface Handler {
  setNext(handler: Handler): Handler;
  handle(email: string, password: string): boolean;
}
