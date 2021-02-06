export function take<T>(collection: Iterable<T>, n: number): T[] {
  const iter = collection[Symbol.iterator]();
  const res = [];

  for (let i = 0; i < n; ++i) {
    const { value, done } = iter.next();
    if (done) return res;
    res.push(value);
  }
  return res;
}

export function takeAll<T>(collection: Iterable<T>): T[] {
  const res: T[] = [];
  for (const e of collection) {
    res.push(e);
  }
  return res;
}

export function takeOne<T>(collection: Iterable<T>): T | undefined {
  return take(collection, 1)[0];
}

export function sort<T>(
  collection: Iterable<T>,
  compareFn?: (a: T, b: T) => number
): T[] {
  const arr = takeAll(collection);
  console.log({ arr });
  return arr.sort(compareFn);
}

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
