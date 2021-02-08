import { expect } from "expect";
import { takeOne } from "src/sync/eager/take-one.ts";

Deno.test("takeOne, takes one elements from an iterable", () => {
  expect(takeOne([1, 2, 3, 4])).toEqual(1);
});

Deno.test(
  "takeOne, returns undefined if the the iterable has no elements",
  () => {
    expect(takeOne([])).toEqual(undefined);
  }
);
