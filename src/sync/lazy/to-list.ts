export function* toList<V>(
  collection: Record<string, V>
): Iterable<[string, V]> {
  const keys = Object.keys(collection);
  for (const key of keys) {
    console.log({ key, value: collection[key] });
    yield [key, collection[key]];
  }
}
