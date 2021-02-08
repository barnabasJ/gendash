import { expect } from "expect";
import { map } from "src/sync/lazy/map.ts";
import { takeAll } from "src/index.ts";

Deno.test("map applies a function to each element", () => {
  expect(takeAll(map([1, 2, 3, 4, 5], (n) => n + 1))).toEqual([2, 3, 4, 5, 6]);
});
