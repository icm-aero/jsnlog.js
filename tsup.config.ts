import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["jsnlog.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: false, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  bundle: true
});