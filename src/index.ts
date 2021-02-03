type Key = string | number | symbol;

export function* toList<V, K extends Key>(
  collection: Record<K, V>
): Iterable<[K, V]> {
  for (const k in collection) {
    yield [k, collection[k]];
  }
}
export function* map<I extends any, O extends any>(
  collection: Iterable<I>,
  fn: (n: I) => O
) {
  for (const n of collection) {
    yield fn(n);
  }
}

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
export function range(end: number): Iterable<number>;
export function range(start: number, end: number): Iterable<number>;
export function range(
  start: number,
  end: number,
  step: number
): Iterable<number>;
export function* range(start_end: number, maybe_end?: number, step = 1) {
  let start = start_end;
  let end = start_end;
  if (maybe_end !== undefined) {
    end = maybe_end;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    yield i;
  }
}

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
