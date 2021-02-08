export function forEach<T>(collection: Iterable<T>, fn: (v: T) => void) {
  for (const r of collection) {
    fn(r);
  }
}
