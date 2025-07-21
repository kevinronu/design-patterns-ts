import { Profile } from "../profile/index.mjs";
import { ContactType, LinkedIn } from "../collections/index.mjs";
import { ProfileIterator } from "./index.mjs";

export default class LinkedInIterator implements ProfileIterator {
  private linkedIn: LinkedIn;
  private type: ContactType;
  private email: string;
  private currentPosition = 0;
  private emails: string[] = [];
  private contacts: (Profile | null)[] = [];

  public constructor(linkedIn: LinkedIn, type: ContactType, email: string) {
    this.linkedIn = linkedIn;
    this.type = type;
    this.email = email;
  }

  private lazyLoad() {
    if (this.emails.length === 0) {
      const profiles = this.linkedIn.requestRelatedContactsFromLinkedInAPI(
        this.email,
        this.type
      );

      profiles.forEach((profileEmail) => {
        this.emails.push(profileEmail);
        this.contacts.push(null);
      });
    }
  }

  public hasNext(): boolean {
    this.lazyLoad();

    return this.currentPosition < this.emails.length;
  }

  public getNext(): Profile | null {
    if (!this.hasNext()) return null;

    const contactEmail = this.emails[this.currentPosition];
    let contact = this.contacts[this.currentPosition];

    if (!contact) {
      contact = this.linkedIn.requestContactInfoFromLinkedInAPI(contactEmail);
      this.contacts[this.currentPosition] = contact;
    }

    this.currentPosition++;

    return contact;
  }

  public reset(): void {
    this.currentPosition = 0;
  }
}
