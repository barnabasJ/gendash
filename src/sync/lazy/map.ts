export function* map<I extends unknown, O extends unknown>(
  collection: Iterable<I>,
  fn: (n: I) => O
) {
  for (const n of collection) {
    yield fn(n);
  }
}
