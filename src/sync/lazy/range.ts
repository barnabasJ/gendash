export function range(end: number): Iterable<number>;
export function range(start: number, end: number): Iterable<number>;
export function range(
  start: number,
  end: number,
  step: number
): Iterable<number>;
export function* range(startEnd: number, maybeEnd?: number, step = 1) {
  let start = 0;
  let end = startEnd;
  if (maybeEnd !== undefined) {
    end = maybeEnd;
    start = startEnd;
  }
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
