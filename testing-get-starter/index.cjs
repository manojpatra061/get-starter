// import { greetFn } from "get-starter"; // ESM -> Error "Cannot use import statement outside a module"
const { greetFn } = require("get-starter"); // CJS

console.log(greetFn());
console.log(require.resolve("get-starter")); // entry point -> should point to index.cjs

/**
 * OUTPUT
 * Hi welcome
 * ...\dist\index.cjs
 */
