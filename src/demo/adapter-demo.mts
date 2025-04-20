import { createApp } from "../design-patterns/structural-patterns/adapter/config/index.mjs";

export default async function adapterDemo() {
  const app = createApp();

  await app.checkout({
    orderId: "ORDER-001",
    customerId: "USER-A",
    amount: 800,
    currency: "USD",
  });

  await app.checkout({
    orderId: "ORDER-002",
    customerId: "USER-B",
    amount: 2500,
    currency: "USD",
  });
}
