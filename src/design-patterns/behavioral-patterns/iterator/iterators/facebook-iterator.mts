import { Profile } from "../profile/index.mjs";
import { ContactType, Facebook } from "../collections/index.mjs";
import { ProfileIterator } from "./index.mjs";

export default class FacebookIterator implements ProfileIterator {
  private facebook: Facebook;
  private type: ContactType;
  private email: string;
  private currentPosition = 0;
  private emails: string[] = [];
  private profiles: (Profile | null)[] = [];

  public constructor(facebook: Facebook, type: ContactType, email: string) {
    this.facebook = facebook;
    this.type = type;
    this.email = email;
  }

  private lazyLoad() {
    if (this.emails.length === 0) {
      const profiles = this.facebook.requestProfileFriendsFromFacebook(
        this.email,
        this.type
      );

      profiles.forEach((profileEmail) => {
        this.emails.push(profileEmail);
        this.profiles.push(null);
      });
    }
  }

  public hasNext(): boolean {
    this.lazyLoad();

    return this.currentPosition < this.emails.length;
  }

  public getNext(): Profile | null {
    if (!this.hasNext()) return null;

    const friendEmail = this.emails[this.currentPosition];
    let friendProfile = this.profiles[this.currentPosition];

    if (!friendProfile) {
      friendProfile = this.facebook.requestProfileFromFacebook(friendEmail);
      this.profiles[this.currentPosition] = friendProfile;
    }

    this.currentPosition++;

    return friendProfile;
  }

  public reset(): void {
    this.currentPosition = 0;
  }
}
