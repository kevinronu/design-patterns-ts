import { PayStrategy } from "./index.mjs";
import type {
  PayPalDetails,
  PayStrategyDetails,
} from "./index.mjs";
import { PaymentDetailsType } from "./index.mjs";

export default class PayByPayPal implements PayStrategy {
  private static readonly DATABASE: Map<string, string> = new Map([
    ["amanda@ya.com", "amanda1985"],
    ["john@amazon.eu", "qwerty"],
  ]);

  private email: string | null = null;
  private password: string | null = null;
  private signedIn: boolean = false;

  public collectPaymentDetails(details: PayStrategyDetails): boolean {
    if (!this.isPayPalDetails(details)) {
      console.warn("⚠️ PayPal strategy received incompatible payment details.");

      return false;
    }

    this.email = details.email;
    this.password = details.password;

    console.log(`📧 Validating PayPal account for ${this.email}...`);

    if (!this.verify()) {
      console.log("❌ Wrong email or password!");

      return false;
    }

    console.log("✅ PayPal credentials verified successfully.");

    return true;
  }

  private verify(): boolean {
    if (!this.email || !this.password) {
      this.signedIn = false;

      return this.signedIn;
    }

    this.signedIn = PayByPayPal.DATABASE.get(this.email) === this.password;

    return this.signedIn;
  }

  private isPayPalDetails(
    details: PayStrategyDetails,
  ): details is PayPalDetails {
    return details.method === PaymentDetailsType.PayPal;
  }

  public pay(paymentAmount: number): boolean {
    if (this.signedIn) {
      console.log(`💳 Paying ${paymentAmount} using PayPal.`);
      return true;
    }

    return false;
  }
}
