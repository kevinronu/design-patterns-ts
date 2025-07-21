import { ProfileIterator } from "../iterators/index.mjs";

export default interface SocialNetwork {
  createFriendsIterator(profileEmail: string): ProfileIterator;
  createCoworkersIterator(profileEmail: string): ProfileIterator;
}
