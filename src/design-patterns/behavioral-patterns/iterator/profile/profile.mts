export default class Profile {
  private name: string;
  private email: string;
  private contacts: Map<string, string[]> = new Map();

  public constructor(email: string, name: string, ...contacts: string[]) {
    this.email = email;
    this.name = name;

    // Parse contacts like "friends:email@gmail.com"
    contacts.forEach((contact) => {
      const parts = contact.split(":");
      let type = "friend";
      let email: string;

      if (parts.length === 1) {
        email = parts[0];
      } else {
        type = parts[0];
        email = parts[1];
      }

      if (!this.contacts.has(type)) {
        this.contacts.set(type, []);
      }

      this.contacts.get(type)!.push(email);
    });
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public getContacts(type: string): string[] {
    if (!this.contacts.has(type)) {
      this.contacts.set(type, []);
    }
    return this.contacts.get(type)!;
  }
}
