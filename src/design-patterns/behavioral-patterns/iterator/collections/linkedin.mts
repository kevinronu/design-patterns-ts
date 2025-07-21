import { Profile } from "../profile/index.mjs";
import { ProfileIterator, LinkedInIterator } from "../iterators/index.mjs";
import { ContactType, SocialNetwork } from "./index.mjs";

export default class LinkedIn implements SocialNetwork {
  private contacts: Profile[];

  public constructor(cache: Profile[] = []) {
    this.contacts = cache;
  }

  private simulateNetworkLatency() {
    const start = Date.now();
    while (Date.now() - start < 500);
  }

  private findContact(profileEmail: string): Profile | null {
    return this.contacts.find((p) => p.getEmail() === profileEmail) || null;
  }

  public requestContactInfoFromLinkedInAPI(
    profileEmail: string
  ): Profile | null {
    this.simulateNetworkLatency();

    console.log(
      `LinkedIn: Loading profile '${profileEmail}' over the network...`
    );

    return this.findContact(profileEmail);
  }

  public requestRelatedContactsFromLinkedInAPI(
    profileEmail: string,
    contactType: ContactType
  ): string[] {
    this.simulateNetworkLatency();

    console.log(
      `LinkedIn: Loading '${contactType}' list of '${profileEmail}' over the network...`
    );

    const profile = this.findContact(profileEmail);

    return profile ? profile.getContacts(contactType) : [];
  }

  public createFriendsIterator(profileEmail: string): ProfileIterator {
    return new LinkedInIterator(this, ContactType.Friend, profileEmail);
  }

  public createCoworkersIterator(profileEmail: string): ProfileIterator {
    return new LinkedInIterator(this, ContactType.Coworker, profileEmail);
  }
}
