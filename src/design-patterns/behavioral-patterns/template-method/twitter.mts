import { Network } from "./index.mjs";

export default class Twitter extends Network {
  constructor(userName: string, password: string) {
    super(userName, password);
  }

  protected async logIn(userName: string, password: string): Promise<boolean> {
    console.log("\n🔐 Checking user's parameters for Twitter...");
    console.log(`👤 Name: ${this.userName}`);

    process.stdout.write("🔑 Password: ");
    console.log("*".repeat(this.password.length));

    await this.simulateNetworkLatency();
    console.log("\n✅ LogIn success on Twitter!");

    return true;
  }

  protected sendData(data: string): boolean {
    console.log(`📨 Message: '${data}' was posted on Twitter`);

    return true;
  }

  protected logOut(): void {
    console.log(`🚪 User: '${this.userName}' was logged out from Twitter`);
  }

  private async simulateNetworkLatency(): Promise<void> {
    process.stdout.write("⏳ Simulating network latency");

    for (let i = 0; i < 5; i++) {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 350));

      process.stdout.write(".");
    }

    console.log();
  }
}
