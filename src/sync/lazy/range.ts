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
