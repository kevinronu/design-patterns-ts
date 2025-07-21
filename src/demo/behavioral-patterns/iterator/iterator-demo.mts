import { Profile } from "../../../design-patterns/behavioral-patterns/iterator/profile/index.mjs";
import {
  Facebook,
  LinkedIn,
} from "../../../design-patterns/behavioral-patterns/iterator/collections/index.mjs";
import { SocialSpammer } from "../../../design-patterns/behavioral-patterns/iterator/spammer/index.mjs";

function createTestProfiles(): Profile[] {
  let profiles: Profile[] = [];

  profiles.push(
    new Profile(
      "anna.smith@bing.com",
      "Anna Smith",
      "friends:mad_max@ya.com",
      "friends:catwoman@yahoo.com",
      "coworkers:sam@amazon.com"
    ),
    new Profile(
      "mad_max@ya.com",
      "Maximilian",
      "friends:anna.smith@bing.com",
      "coworkers:sam@amazon.com"
    ),
    new Profile("bill@microsoft.eu", "Billie", "coworkers:avanger@ukr.net"),
    new Profile("avanger@ukr.net", "John Day", "coworkers:bill@microsoft.eu"),
    new Profile(
      "sam@amazon.com",
      "Sam Kitting",
      "coworkers:anna.smith@bing.com",
      "coworkers:mad_max@ya.com",
      "friends:catwoman@yahoo.com"
    ),
    new Profile(
      "catwoman@yahoo.com",
      "Liza",
      "friends:anna.smith@bing.com",
      "friends:sam@amazon.com"
    )
  );

  return profiles;
}

export default function iteratorDemo() {
  // const linkedIn = new LinkedIn(createTestProfiles());
  const facebook = new Facebook(createTestProfiles());

  const facebookSpammer = new SocialSpammer(facebook);

  facebookSpammer.sendSpamToFriends(
    "anna.smith@bing.com",
    "Hey! This is Anna's friend Josh. Can you do me a favor and like this post [link]?"
  );

  facebookSpammer.sendSpamToCoworkers(
    "anna.smith@bing.com",
    "Hey! This is Anna's boss Jason. Anna told me you would be interested in [link]."
  );
}
