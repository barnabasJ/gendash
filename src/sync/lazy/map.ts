export function* map<I extends any, O extends any>(
  collection: Iterable<I>,
  fn: (n: I) => O
) {
  for (const n of collection) {
    yield fn(n);
  }
}
