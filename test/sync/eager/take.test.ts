import { expect } from "expect";
import { take } from "src/sync/eager/take.ts";

Deno.test("take, takes n elements from an iterable", () => {
  expect(take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
});

Deno.test(
  "take, returns all possible elements if n is bigger than list.length",
  () => {
    expect(take([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4]);
  }
);

Deno.test("take, returns an empty array if n == 0", () => {
  expect(take([1, 2, 3, 4], 0)).toEqual([]);
});

Deno.test("take, returns an empty array if n < 0", () => {
  expect(take([1, 2, 3, 4], -10)).toEqual([]);
});
