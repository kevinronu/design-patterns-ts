export interface BankTransferPayload {
  client_id: string;
  value: number;
  currency_code: string;
  auth_token: string;
  reference: string;
}

export default class LegacyBankAPI {
  private readonly token = "BANK_TOKEN_XYZ";

  public getToken(): string {
    return this.token;
  }

  public async initiateTransfer(
    bankTransferPPayload: BankTransferPayload
  ): Promise<{ ok: boolean; ref: string; error?: string }> {
    console.log("🌐 Sending to bank:", bankTransferPPayload);

    if (
      !bankTransferPPayload.auth_token ||
      bankTransferPPayload.auth_token !== this.token
    ) {
      return {
        ok: false,
        ref: bankTransferPPayload.reference,
        error: "INVALID_TOKEN",
      };
    }

    if (!bankTransferPPayload.value || bankTransferPPayload.value <= 0) {
      return {
        ok: false,
        ref: bankTransferPPayload.reference,
        error: "INVALID_AMOUNT",
      };
    }

    if (bankTransferPPayload.value > 1000) {
      return {
        ok: false,
        ref: bankTransferPPayload.reference,
        error: "LIMIT_EXCEEDED",
      };
    }

    return { ok: true, ref: bankTransferPPayload.reference };
  }
}
