export enum EventType {
  UserLoggedIn = "user.logged_in",
  UserLoggedOut = "user.logged_out",

  CartItemAdded = "cart.item_added",
  CartItemRemoved = "cart.item_removed",
  CheckoutCompleted = "checkout.completed",

  SystemError = "system.error",
}
