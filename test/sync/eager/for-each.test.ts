import { expect } from "expect";
import { forEach } from "src/sync/eager/for-each.ts";

Deno.test("calls a function for each element in the iterable", () => {
  const result: number[] = [];
  forEach([1, 2, 3, 4], (n) => result.push(n));
  expect(result).toEqual([1, 2, 3, 4]);
});
