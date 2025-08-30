import { EventType } from "../../../design-patterns/behavioral-patterns/observer/events/index.mjs";
import { EventBus } from "../../../design-patterns/behavioral-patterns/observer/subjects/index.mjs";
import {
  LoggerObserver,
  MetricsObserver,
} from "../../../design-patterns/behavioral-patterns/observer/observers/index.mjs";

interface UserEventPayload {
  userId: string;
  at: Date;
}

interface CartEventPayload {
  itemId: string;
  qty: number;
}

interface CheckoutEventPayload {
  orderId: string;
  total: number;
  currency: string;
}

interface SystemErrorPayload {
  code: string;
  message: string;
}

type DemoPayload =
  | UserEventPayload
  | CartEventPayload
  | CheckoutEventPayload
  | SystemErrorPayload;

export default function observerDemo(): void {
  // Use the normal constructor and provide a precise TPayload.
  const bus = new EventBus<DemoPayload>();

  const logger = new LoggerObserver<DemoPayload>();
  const metrics = new MetricsObserver<DemoPayload>();

  bus.addObserver(logger);
  bus.addObserver(metrics);

  // 1) User logs in
  console.log("👤 User logging in...");
  bus.notify({
    type: EventType.UserLoggedIn,
    payload: { userId: "u_123", at: new Date() } satisfies UserEventPayload,
  });

  // 2) Cart activity
  console.log("🛒 Adding first item to cart...");
  bus.notify({
    type: EventType.CartItemAdded,
    payload: { itemId: "sku-ABC", qty: 1 } satisfies CartEventPayload,
  });

  console.log("🛒 Adding second item to cart...");
  bus.notify({
    type: EventType.CartItemAdded,
    payload: { itemId: "sku-XYZ", qty: 2 } satisfies CartEventPayload,
  });

  console.log("🗑️ Removing first item from cart...");
  bus.notify({
    type: EventType.CartItemRemoved,
    payload: { itemId: "sku-ABC", qty: 1 } satisfies CartEventPayload,
  });

  // 3) Checkout completes
  console.log("💳 Completing checkout...");
  bus.notify({
    type: EventType.CheckoutCompleted,
    payload: {
      orderId: "ord_999",
      total: 49.9,
      currency: "USD",
    } satisfies CheckoutEventPayload,
  });

  // 4) A system error occurs
  console.log("⚠️ System error occurred...");
  bus.notify({
    type: EventType.SystemError,
    payload: {
      code: "E_TIMEOUT",
      message: "Gateway timeout",
    } satisfies SystemErrorPayload,
  });

  // Unsubscribe logger after the first error
  bus.removeObserver(logger);
  console.log("🔕 Logger unsubscribed (only metrics continues).");

  // 5) More events
  console.log("👤 User logging out...");
  bus.notify({
    type: EventType.UserLoggedOut,
    payload: { userId: "u_123", at: new Date() } satisfies UserEventPayload,
  });

  console.log("🚨 Another system error occurred...");
  bus.notify({
    type: EventType.SystemError,
    payload: {
      code: "E_DB",
      message: "Database unavailable",
    } satisfies SystemErrorPayload,
  });
}
