// Common interface for all payment strategies
export enum PaymentDetailsType {
  PayPal = "paypal",
  CreditCard = "credit-card",
}

export type PayPalDetails = {
  method: PaymentDetailsType.PayPal;
  email: string;
  password: string;
};

export type CreditCardDetails = {
  method: PaymentDetailsType.CreditCard;
  number: string;
  expiry: string;
  cvv: string;
};

export type PayStrategyDetails = PayPalDetails | CreditCardDetails;

export default interface PayStrategy {
  pay(paymentAmount: number): boolean;
  collectPaymentDetails(details: PayStrategyDetails): boolean;
}
