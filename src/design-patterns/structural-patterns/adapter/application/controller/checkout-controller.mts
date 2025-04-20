import { PaymentService } from "../service/index.mjs";
import { PaymentRequest } from "../../domain/model/index.mjs";

export default class CheckoutController {
  private readonly paymentService: PaymentService;

  public constructor(paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  public async checkout(request: PaymentRequest): Promise<void> {
    console.log(`📦 Processing order: ${request.orderId}`);

    try {
      await this.paymentService.handlePayment(request);
    } catch (error) {
      console.error(
        `🚫 Checkout failed for ${request.orderId}:`,
        (error as Error).message
      );
    }
  }
}
