import { expect } from "expect";
import { sort } from "src/sync/eager/sort.ts";

Deno.test("sort uses array.prototype.sort to sort the iterable", () => {
  expect(sort([5, 9, 4, 7, 1, 8, 3, 2, 6])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);
});

Deno.test("sort takes a comparator to pass to array.prototype.sort", () => {
  expect(sort([5, 9, 4, 7, 1, 8, 3, 2, 6], (a, b) => b - a)).toEqual([
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
  ]);
});
