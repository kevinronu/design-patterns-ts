import { PaymentProcessorPort } from "../../domain/port/index.mjs";
import { PaymentRequest } from "../../domain/model/index.mjs";
import { LegacyBankAPI } from "../../infrastructure/external/index.mjs";

export default class LegacyBankAdapter implements PaymentProcessorPort {
  private readonly legacyBankApi: LegacyBankAPI;

  constructor(bankApi: LegacyBankAPI) {
    this.legacyBankApi = bankApi;
  }

  public async process(paymentRequest: PaymentRequest): Promise<boolean> {
    const bankTransferPayload = {
      value: paymentRequest.amount,
      currency_code: paymentRequest.currency,
      client_id: paymentRequest.customerId,
      auth_token: this.legacyBankApi.getToken(),
      reference: paymentRequest.orderId,
    };

    const response = await this.legacyBankApi.initiateTransfer(
      bankTransferPayload
    );

    console.log("🔄 Bank response:", response);

    if (!response.ok) {
      throw new Error(
        `Bank transfer failed [${response.ref}] → Reason: ${response.error}`
      );
    }

    return response.ok;
  }
}
