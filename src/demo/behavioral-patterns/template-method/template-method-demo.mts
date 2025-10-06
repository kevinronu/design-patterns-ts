import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  Facebook,
  Twitter,
  Network,
} from "../../../design-patterns/behavioral-patterns/template-method/index.mjs";

export default async function templateMethodDemo() {
  const rl = readline.createInterface({ input, output });

  // 1️⃣ Ask for user credentials
  const userName = await rl.question("👤 Input user name: ");
  const password = await rl.question("🔑 Input password: ");
  const message = await rl.question("💬 Input message: ");

  // 2️⃣ Choose network
  console.log("\nChoose social network for posting message:");
  console.log("1️⃣ - Facebook");
  console.log("2️⃣ - Twitter");
  const choice = await rl.question("➡️ Your choice: ");

  // 3️⃣ Create proper network object
  let network: Network;
  if (choice === "1") {
    network = new Facebook(userName, password);
  } else {
    network = new Twitter(userName, password);
  }

  // 4️⃣ Post message
  network.post(message);

  rl.close();
}
