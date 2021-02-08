import { expect } from "expect";
import { takeAll } from "src/index.ts";
import { range } from "src/sync/lazy/range.ts";

Deno.test(
  "range called with 1 parameter creates a list of values from 0 up to n-1",
  () => {
    expect(takeAll(range(10))).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
);

Deno.test(
  "range called with 2 parameter creates a list of values from first up to second-1",
  () => {
    expect(takeAll(range(1, 10))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
);

Deno.test(
  "range called with 3 parameter creates a list of values from first up to second-1 with step third",
  () => {
    expect(takeAll(range(1, 10, 2))).toEqual([1, 3, 5, 7, 9]);
  }
);
