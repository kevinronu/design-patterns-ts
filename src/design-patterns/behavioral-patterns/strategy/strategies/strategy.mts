// Common interface for all payment strategies
export default interface PayStrategy {
  pay(paymentAmount: number): boolean;
  collectPaymentDetails(): void;
}
