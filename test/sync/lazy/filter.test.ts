import { expect } from "expect";
import { filter } from "src/sync/lazy/filter.ts";
import { takeAll } from "src/index.ts";

Deno.test("returns all values for which the predicate returns true", () => {
  expect(takeAll(filter([1, 2, 3, 4, 5], (n) => n % 2 === 0))).toEqual([2, 4]);
});
