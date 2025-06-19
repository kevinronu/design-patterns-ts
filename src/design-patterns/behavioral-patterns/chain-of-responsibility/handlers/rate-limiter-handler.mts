import { BaseHandler } from "./index.mjs";

const oneMinuteInMs = 60 * 1000;

/**
 * RateLimitHandler limits the number of requests per minute.
 */
export default class RateLimitHandler extends BaseHandler {
  private requestCount = 0;
  private currentTime = Date.now();
  private readonly maxRequestsPerMinute: number;

  constructor(maxRequestsPerMinute: number) {
    super();
    this.maxRequestsPerMinute = maxRequestsPerMinute;
  }

  public handle(email: string, password: string): boolean {
    if (Date.now() > this.currentTime + oneMinuteInMs) {
      this.requestCount = 0;
      this.currentTime = Date.now();
    }

    this.requestCount++;

    if (this.requestCount > this.maxRequestsPerMinute) {
      console.log("🚫 Request limit exceeded!");

      return false;
    }

    return super.handle(email, password);
  }
}
