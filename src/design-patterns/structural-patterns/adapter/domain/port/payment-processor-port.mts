import { PaymentRequest } from "../model/payment-request.mjs";

export default interface PaymentProcessorPort {
  process(request: PaymentRequest): Promise<boolean>;
}
