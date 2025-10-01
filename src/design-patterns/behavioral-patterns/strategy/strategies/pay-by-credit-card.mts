import { PayStrategy } from "./index.mjs";
import type {
  CreditCardDetails,
  PayStrategyDetails,
} from "./index.mjs";
import { PaymentDetailsType } from "./index.mjs";

export class CreditCard {
  public number: string;
  public expiry: string;
  public cvv: string;
  public amount: number;

  public constructor(number: string, expiry: string, cvv: string) {
    this.number = number;
    this.expiry = expiry;
    this.cvv = cvv;
    this.amount = 100_000;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }
}

export default class PayByCreditCard implements PayStrategy {
  private card: CreditCard | null = null;

  public collectPaymentDetails(details: PayStrategyDetails): boolean {
    if (!this.isCreditCardDetails(details)) {
      console.warn(
        "⚠️ Credit card strategy received incompatible payment details.",
      );

      return false;
    }

    if (!this.validate(details)) {
      console.log("❌ Provided credit card data looks invalid.");

      return false;
    }

    this.card = new CreditCard(details.number, details.expiry, details.cvv);
    console.log(
      `💳 Credit card ending in ${details.number.slice(-4)} is ready for payment.`,
    );

    return true;
  }

  public pay(paymentAmount: number): boolean {
    if (this.card) {
      console.log(`💳 Paying ${paymentAmount} using Credit Card.`);
      this.card.setAmount(this.card.getAmount() - paymentAmount);

      return true;
    }

    return false;
  }

  private isCreditCardDetails(
    details: PayStrategyDetails,
  ): details is CreditCardDetails {
    return details.method === PaymentDetailsType.CreditCard;
  }

  private validate(details: CreditCardDetails): boolean {
    const sanitizedNumber = details.number.replace(/\D/g, "");
    const maskedLengthOk = sanitizedNumber.length >= 12;
    const expiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(details.expiry);
    const cvvOk = /^\d{3,4}$/.test(details.cvv);

    return maskedLengthOk && expiryOk && cvvOk;
  }
}
