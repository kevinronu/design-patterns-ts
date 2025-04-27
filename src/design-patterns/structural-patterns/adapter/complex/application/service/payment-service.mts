import { PaymentProcessorPort } from "../../domain/port/index.mjs";
import { PaymentRequest } from "../../domain/model/index.mjs";

export default class PaymentService {
  private readonly processor: PaymentProcessorPort;

  constructor(processor: PaymentProcessorPort) {
    this.processor = processor;
  }

  public async handlePayment(request: PaymentRequest): Promise<void> {
    if (request.amount <= 0) {
      throw new Error(`⚠️ Invalid payment amount: ${request.amount}`);
    }

    await this.processor.process(request);

    console.log(`✅ Payment for ${request.orderId} succeeded.`);
  }
}
