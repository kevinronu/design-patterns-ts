import { Order } from "../../../design-patterns/behavioral-patterns/strategy/context/index.mjs";
import {
  PayByPayPal,
  PayByCreditCard,
  PayStrategy,
} from "../../../design-patterns/behavioral-patterns/strategy/strategies/index.mjs";

export default function strategyDemo(): void {
  const priceOnProducts: Map<number, number> = new Map([
    [1, 2200],
    [2, 1850],
    [3, 1100],
    [4, 890],
  ]);

  const order = new Order();
  let strategy: PayStrategy | null = null;

  // ---------- Simulated user input ----------
  // Product selection (simulate selecting 2 motherboards + 1 CPU)
  const productSelections = [
    { choice: 1, count: 2 },
    { choice: 2, count: 1 },
  ];

  for (const selection of productSelections) {
    const cost = priceOnProducts.get(selection.choice)!;
    order.setTotalCost(cost * selection.count);
    console.log(
      `🛒 Selected ${selection.count} item(s) of product ${selection.choice}`
    );
  }

  console.log(`💰 Total order cost: ${order.getTotalCost()}`);

  // ---------- Simulate payment method selection ----------
  const paymentMethod = 1; // 1 = PayPal, 2 = Credit Card
  if (strategy === null) {
    console.log("Please, select a payment method:");
    console.log("1 - PayPal");
    console.log("2 - Credit Card");

    if (paymentMethod === 1) {
      strategy = new PayByPayPal();
      console.log("👉 Chosen: PayPal");
    } else {
      strategy = new PayByCreditCard();
      console.log("👉 Chosen: Credit Card");
    }
  }

  // ---------- Collect payment details ----------
  if (strategy) {
    order.processOrder(strategy);

    // ---------- Decide to pay ----------
    const proceed = "P"; // Simulating user choosing "P" (Pay)
    if (proceed.toUpperCase() === "P") {
      if (strategy.pay(order.getTotalCost())) {
        console.log("✅ Payment has been successful.");
        order.setClosed();
      } else {
        console.log("❌ FAIL! Please, check your data.");
      }
    }
  }
}
