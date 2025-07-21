import { Profile } from "../profile/index.mjs";
import { ProfileIterator, FacebookIterator } from "../iterators/index.mjs";
import { ContactType, SocialNetwork } from "./index.mjs";

export default class Facebook implements SocialNetwork {
  private profiles: Profile[];

  public constructor(cache: Profile[] = []) {
    this.profiles = cache;
  }

  private simulateNetworkLatency() {
    // Simulates network delay (async alternative is better, but kept sync for parity)
    const start = Date.now();
    while (Date.now() - start < 500); // ~0.5 sec
  }

  private findProfile(profileEmail: string): Profile | null {
    return this.profiles.find((p) => p.getEmail() === profileEmail) || null;
  }

  public requestProfileFromFacebook(profileEmail: string): Profile | null {
    this.simulateNetworkLatency();

    console.log(
      `Facebook: Loading profile '${profileEmail}' over the network...`
    );

    return this.findProfile(profileEmail);
  }

  public requestProfileFriendsFromFacebook(
    profileEmail: string,
    contactType: ContactType
  ): string[] {
    this.simulateNetworkLatency();

    console.log(
      `Facebook: Loading '${contactType}' list of '${profileEmail}' over the network...`
    );

    const profile = this.findProfile(profileEmail);

    if (!profile) {
      console.warn(`Profile with email '${profileEmail}' not found.`);

      return [];
    }

    return profile.getContacts(contactType);
  }

  public createFriendsIterator(profileEmail: string): ProfileIterator {
    return new FacebookIterator(this, ContactType.Friend, profileEmail);
  }

  public createCoworkersIterator(profileEmail: string): ProfileIterator {
    return new FacebookIterator(this, ContactType.Coworker, profileEmail);
  }
}
