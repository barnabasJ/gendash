export function* toList<V>(
  collection: Record<string, V>
): Iterable<[string, V]> {
  console.log({ collection });
  for (const key of Object.keys(collection)) {
    console.log({ key, value: collection[key] });
    yield [key, collection[key]];
  }
}

export async function* map<I extends any, O extends any>(
  collection: AsyncIterable<I>,
  fn: (n: I) => O
) {
  for await (const n of collection) {
    yield fn(n);
  }
}

export async function forEach<T>(
  collection: AsyncIterable<T>,
  fn: (v: T) => void
) {
  for await (const r of collection) {
    fn(r);
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

export function* uniq<T>(collection: Iterable<T>) {
  const seen = new Set<T>();
  for (const v of collection) {
    if (!seen.has(v)) {
      seen.add(v);
      yield v;
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
  let start = 0;
  let end = start_end;
  if (maybe_end !== undefined) {
    end = maybe_end;
    start = start_end;
  }
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
