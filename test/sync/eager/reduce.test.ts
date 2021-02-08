import { expect } from "expect";
import { reduce } from "src/sync/eager/reduce.ts";

Deno.test(
  "reduce takes all values and creates a single value from them",
  () => {
    expect(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (acc, n) => acc + n, 0)).toEqual(
      45
    );
  }
);
