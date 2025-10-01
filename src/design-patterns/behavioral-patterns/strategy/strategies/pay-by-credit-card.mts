import { PayStrategy } from "./index.mjs";

export class CreditCard {
  public number: string;
  public date: string;
  public cvv: string;
  public amount: number;

  public constructor(number: string, date: string, cvv: string) {
    this.number = number;
    this.date = date;
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

  public collectPaymentDetails(): void {
    // In real app, this would be user input
    console.log("💳 Simulating Credit Card input...");
    const number = "1234-5678-9012-3456";
    const date = "12/25";
    const cvv = "123";

    this.card = new CreditCard(number, date, cvv);
  }

  public pay(paymentAmount: number): boolean {
    if (this.card) {
      console.log(`💳 Paying ${paymentAmount} using Credit Card.`);
      this.card.setAmount(this.card.getAmount() - paymentAmount);

      return true;
    }

    return false;
  }
}
