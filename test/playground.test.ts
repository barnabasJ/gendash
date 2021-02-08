import { poll, forEach, map } from "src/index.ts";

forEach(
  map(poll(), async (r) => await r.json()),
  async (t) => console.log(await t)
);
