export default abstract class Network {
  protected userName: string;
  protected password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }

  /**
   * 📝 Template Method (do not override this method)
   *
   * 🚫 In languages like Java, this method would be marked as `final`
   * to prevent subclasses from modifying the algorithm structure.
   */
  public async post(message: string): Promise<boolean> {
    // 1️⃣ Authenticate
    if (await this.logIn(this.userName, this.password)) {
      // 2️⃣ Send the post data
      const result = this.sendData(message);

      // 3️⃣ Logout after sending
      this.logOut();

      return result;
    }

    return false;
  }

  // 🔒 Abstract steps (must be implemented by subclasses)
  protected abstract logIn(
    userName: string,
    password: string
  ): Promise<boolean>;
  protected abstract sendData(data: string): boolean;
  protected abstract logOut(): void;
}
