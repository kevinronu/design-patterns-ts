import { LegacyBankAPI } from "../infrastructure/external/index.mjs";
import { LegacyBankAdapter } from "../adapter/out/index.mjs";
import { PaymentService } from "../application/service/index.mjs";
import { CheckoutController } from "../application/controller/index.mjs";

export function createApp(): CheckoutController {
  const legacyBankApi = new LegacyBankAPI();
  const legacyBankAdapter = new LegacyBankAdapter(legacyBankApi);
  const paymentService = new PaymentService(legacyBankAdapter);
  const checkoutController = new CheckoutController(paymentService);
  return checkoutController;
}
