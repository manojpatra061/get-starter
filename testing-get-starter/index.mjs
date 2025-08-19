import { greetFn } from "get-starter"; // ESM
// const { greetFn } = require("get-starter"); // CJS -> Error "require is not defined in ES module scope"

console.log(greetFn());
console.log(import.meta.resolve("get-starter")); // entry point -> should point to index.mjs

/**
 * OUTPUT
 * Hi welcome
 * .../dist/index.mjs
 */
