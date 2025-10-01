import { PayStrategy } from "./index.mjs";

export default class PayByPayPal implements PayStrategy {
  private static readonly DATABASE: Map<string, string> = new Map([
    ["amanda1985", "amanda@ya.com"],
    ["qwerty", "john@amazon.eu"],
  ]);

  private email: string | null = null;
  private password: string | null = null;
  private signedIn: boolean = false;

  public collectPaymentDetails(): void {
    // In real app, this would come from UI form instead of console
    console.log("📧 Simulating PayPal data input...");
    this.email = "amanda@ya.com";
    this.password = "amanda1985";

    if (!this.verify()) {
      console.log("❌ Wrong email or password!");

      return;
    }

    console.log("✅ Data verification has been successful.");
  }

  private verify(): boolean {
    if (
      this.password &&
      PayByPayPal.DATABASE.get(this.password) === this.email
    ) {
      this.signedIn = true;
    }

    return this.signedIn;
  }

  public pay(paymentAmount: number): boolean {
    if (this.signedIn) {
      console.log(`💳 Paying ${paymentAmount} using PayPal.`);
      return true;
    }

    return false;
  }
}
