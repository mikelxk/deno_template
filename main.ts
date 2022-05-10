import { parse } from "std/flags/mod.ts";
const args = parse(Deno.args);
console.log(`Hello World, your args are ${args.name}`);