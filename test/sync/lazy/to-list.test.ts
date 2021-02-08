import { expect } from "expect";
import { toList } from "src/sync/lazy/to-list.ts";
import { takeAll } from "src/index.ts";

Deno.test("toList transforms an Record to a list of key value tuples", () => {
  expect(takeAll(toList({ a: 1, b: 2 }))).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
});
