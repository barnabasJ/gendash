export function* filter<T>(
  collection: Iterable<T>,
  predicate: (e: T) => boolean
) {
  for (const e of collection) {
    if (predicate(e)) {
      yield e;
    }
  }
}
