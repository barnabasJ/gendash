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
