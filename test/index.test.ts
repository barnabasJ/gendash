import { expect } from "expect";
import {
  map,
  takeOne,
  take,
  range,
  filter,
  takeAll,
  toList,
} from "src/index.ts";

Deno.test("something", () => {
  expect(
    takeOne(
      map([1, 2], (n) => {
        console.log("nth iteration:", n);
        return n;
      })
    )
  ).toEqual(1);

  expect(takeOne([])).toEqual(undefined);
  expect(take([], 3)).toEqual([]);
  expect(take([], 0)).toEqual([]);
  expect(take([], -10)).toEqual([]);

  expect(
    takeAll(filter(new Set(takeAll(range(0, 10))), (n) => n % 2 === 0))
  ).toEqual([0, 2, 4, 6, 8]);
  expect(takeAll(filter(range(0, 11), (n) => n % 2 === 0))).toEqual([
    0,
    2,
    4,
    6,
    8,
    10,
  ]);

  expect(
    take(
      filter(
        map(range(0, 11), (n) => {
          console.log(n);
          return n;
        }),
        (n) => n % 2 === 0
      ),
      2
    )
  ).toEqual([0, 2]);

  expect(takeAll(new Set())).toEqual([]);
  expect(takeAll(new Set())).toEqual([]);
  expect(takeAll(new Set([0, 1, 1]))).toEqual([0, 1]);
  // expect(takeAll(toList(new Set([0, 1, 1])))).toEqual([0, 1]);
  expect(takeAll(toList({ a: 1 }))).toEqual([["a", 1]]);
  expect(takeAll(toList(new Map()))).toEqual([]);
  const m = new Map();
  m.set("hello", "world");
  expect(takeAll(m)).toEqual([["hello", "world"]]);
  // expect(takeAll(toList(m))).toEqual([["hello", "world"]]);
});
