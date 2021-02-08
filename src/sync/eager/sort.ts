import { takeAll } from "./index.ts";

export function sort<T>(
  collection: Iterable<T>,
  compareFn?: (a: T, b: T) => number
): T[] {
  const arr = takeAll(collection);
  return arr.sort(compareFn);
}
