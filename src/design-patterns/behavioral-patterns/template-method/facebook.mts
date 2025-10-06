// 📘 Concrete implementation for Facebook
import { Network } from "./index.mjs";

export default class Facebook extends Network {
  constructor(userName: string, password: string) {
    super(userName, password);
  }

  protected async logIn(userName: string, password: string): Promise<boolean> {
    console.log("\n🔐 Checking user's parameters for Facebook...");
    console.log(`👤 Name: ${this.userName}`);

    process.stdout.write("🔑 Password: ");
    console.log("*".repeat(this.password.length));

    await this.simulateNetworkLatency();
    console.log("\n✅ LogIn success on Facebook!");

    return true;
  }

  protected sendData(data: string): boolean {
    console.log(`📨 Message: '${data}' was posted on Facebook`);

    return true;
  }

  protected logOut(): void {
    console.log(`🚪 User: '${this.userName}' was logged out from Facebook`);
  }

  private async simulateNetworkLatency(): Promise<void> {
    process.stdout.write("⏳ Simulating network latency");

    for (let i = 0; i < 5; i++) {
      await new Promise<void>((resolve, _) => {
        setTimeout(() => resolve(), 350);
      });

      process.stdout.write(".");
    }

    console.log();
  }
}
