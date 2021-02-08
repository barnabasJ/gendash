export function takeAll<T>(collection: Iterable<T>): T[] {
  const res: T[] = [];
  for (const e of collection) {
    res.push(e);
  }
  return res;
}
