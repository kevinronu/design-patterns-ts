export default class GPSNavigator {
  private route: string = "";

  public getNavigator(): void {
    this.route =
      "221b, Baker Street, London  to Scotland Yard, 8-10 Broadway, London";
  }

  public gpsNavigator(manualRoute: string): void {
    this.route = manualRoute;
  }

  public getRoute(): string {
    return this.route;
  }
}
