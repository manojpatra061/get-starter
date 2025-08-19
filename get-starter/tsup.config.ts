import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  // minify: true,
  outExtension: ({ format }) => {
    const ext = format === "esm" ? ".mjs" : format === "cjs" ? ".cjs" : ".js";
    return { js: ext };
  },
});
