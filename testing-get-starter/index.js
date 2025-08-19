// import { greetFn } from "get-starter"; // "type": "module"
const { greetFn } = require("get-starter"); // "type": "commonjs"

console.log(greetFn());

/**
 * Testing if it's pointing to the appropriate file 
 * as per selected module (MJS or CJS)
 */
// console.log(import.meta.resolve("get-starter")); // "type": "module" | entry point -> should point to index.mjs
console.log(require.resolve("get-starter")); // "type": "commonjs" | entry point -> should point to index.cjs

