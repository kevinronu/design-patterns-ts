import { Profile } from "../profile/index.mjs";

export default interface ProfileIterator {
  hasNext(): boolean;
  getNext(): Profile | null;
  reset(): void;
}
