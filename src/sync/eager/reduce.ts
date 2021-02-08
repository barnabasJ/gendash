export function reduce<T, R>(
  collection: Iterable<T>,
  fn: (acc: R, value: T) => R,
  acc: R
) {
  let result = acc;
  for (const v of collection) {
    result = fn(result, v);
  }

  return result;
}
