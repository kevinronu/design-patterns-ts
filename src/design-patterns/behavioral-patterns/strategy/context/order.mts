import {
  PayStrategy,
  PayStrategyDetails,
} from "../strategies/index.mjs";

export default class Order {
  private totalCost: number = 0;
  private closed: boolean = false;

  public processOrder(
    strategy: PayStrategy,
    details: PayStrategyDetails,
  ): boolean {
    return strategy.collectPaymentDetails(details);
  }

  public setTotalCost(cost: number): void {
    this.totalCost += cost;
  }

  public getTotalCost(): number {
    return this.totalCost;
  }

  public isClosed(): boolean {
    return this.closed;
  }

  public setClosed(): void {
    this.closed = true;
  }
}
