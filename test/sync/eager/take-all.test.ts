import { expect } from "expect";
import { takeAll } from "src/sync/eager/take-all.ts";

Deno.test("returns all values from an iterable as a list", () => {
  expect(takeAll([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
