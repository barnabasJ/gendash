import { expect } from "expect";
import { uniq } from "src/sync/lazy/uniq.ts";
import { takeAll } from "src/index.ts";

expect(takeAll(uniq([1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9]))).toEqual([
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
