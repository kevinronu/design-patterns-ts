import { SocialNetwork } from "../collections/index.mjs";

export default class SocialSpammer {
  private network: SocialNetwork;

  public constructor(network: SocialNetwork) {
    this.network = network;
  }

  private sendMessage(email: string, message: string) {
    console.log(`Sent message to: '${email}'. Message body: '${message}'`);
  }

  public sendSpamToFriends(profileEmail: string, message: string) {
    console.log("\nIterating over friends...\n");

    const iterator = this.network.createFriendsIterator(profileEmail);

    while (iterator.hasNext()) {
      const profile = iterator.getNext();

      if (profile) {
        this.sendMessage(profile.getEmail(), message);
      }
    }
  }

  public sendSpamToCoworkers(profileEmail: string, message: string) {
    console.log("\nIterating over coworkers...\n");

    const iterator = this.network.createCoworkersIterator(profileEmail);

    while (iterator.hasNext()) {
      const profile = iterator.getNext();

      if (profile) {
        this.sendMessage(profile.getEmail(), message);
      }
    }
  }
}
